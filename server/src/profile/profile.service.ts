import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { 
    achievementsType,
    AchievementThresholds,
    activitiesHistoryType,
    matchesResultsType,
    matchesHistoryType,
    userProfileData } from './types/types';
import { GameHistory } from '@prisma/client';
import { UpdateUserDto } from './dto/updateuser-profile.dto';


@Injectable()
export class ProfileService {
  constructor(private prismaService: PrismaService) {}

  /*----------------------------------------------------------------------------------------------------------------------------------------*/

  async calculateChartData(userId: string): Promise<activitiesHistoryType | null> {
      try {
        const gameHistory = await this.prismaService.gameHistory.findMany({
            where: { userId: userId },
            orderBy: { createdAt: 'asc' },
        });
        const matchesPerMonth: number[] = [];
        const labels: string[] = [];
        let startMonth = -1;
        gameHistory.forEach(entry => {
            const entryMonth = new Date(entry.createdAt).getMonth();
            const monthName = new Date(entry.createdAt).toLocaleString('en-US', { month: 'long' });
        
            if (!labels.includes(monthName)) {
                labels.push(monthName);
                matchesPerMonth.push(0);
            }
        
            matchesPerMonth[labels.indexOf(monthName)] += 1;
        
            if (startMonth === -1 || entryMonth < startMonth) {
                startMonth = entryMonth;
            }
        });
        const adjustedLabels = labels.slice(startMonth).concat(labels.slice(0, startMonth));
        const adjustedMatches = matchesPerMonth.slice(startMonth).concat(matchesPerMonth.slice(0, startMonth));
        
        const data: activitiesHistoryType = {
            labels: adjustedLabels,
            values: adjustedMatches,
        };
        return data;
    } catch (error) {
        console.error('Error in calculateChartData() err:', error);
        return null;
    }
}

/*----------------------------------------------------------------------------------------------------------------------------------------*/

async calculateMatchesResults(userId: string): Promise<matchesResultsType | null> {
    try {
        const gameHistory = await this.prismaService.gameHistory.findMany({
            where: { userId: userId },
        });
        let wins = 0;
        let loses = 0;
        let draws = 0;
        
        gameHistory.forEach(history => {
            if (history.status === 'WIN') {
                wins++;
            } else if (history.status === 'LOSE') {
                loses++;
            } else if (history.status === 'DRAW') {
                draws++;
            }
        });
        
        const matchesResults: matchesResultsType = {
            wins,
            loses,
            draws,
        };
        
        return matchesResults;
    } catch (error) {
        console.error('Error in calculateMatchesResults() err:', error);
        return null;
    }
  }
  
  /*----------------------------------------------------------------------------------------------------------------------------------------*/
  
  async determineAchievements(userId: string): Promise<achievementsType | null> {
      try {
          const gameHistoryData: GameHistory[] | null = await this.prismaService.gameHistory.findMany({
                where: { userId: userId },
            });
      
        const totalXP = gameHistoryData.reduce((totalXP, entry) => totalXP + entry.xp, 0);
        const totalMatches = gameHistoryData.length;
        const totalRounds = gameHistoryData.reduce((total, entry) => total + entry.rounds, 0);
        
        const thresholds: AchievementThresholds = {
          Bronze: { xp: 20, matches: 1, rounds: 3 },
          Silver: { xp: 50, matches: 3, rounds: 7 },
          Gold: { xp: 100, matches: 6, rounds: 18 },
          Platinum: { xp: 150, matches: 11, rounds: 30 }, 
          Emerald: { xp: 200, matches: 30, rounds: 60 },
          Hamas: { xp: 500, matches: 50, rounds: 150 },
        };
        
        const achievements: achievementsType = Object.fromEntries(
            Object.entries(thresholds).map(([key, value]) => [key, !(totalXP >= value.xp && totalMatches >= value.matches && totalRounds >= value.rounds)])
            ) as achievementsType;
    
            return achievements;
        } catch (error) {
            console.error('Error fetching game history data:', error);
            return null;
        }
        
        
    }
    
    
    /*----------------------------------------------------------------------------------------------------------------------------------------*/

  async calculateMatchesHistory(userId: string): Promise<matchesHistoryType | []> {
    try {
        const gameHistory = await this.prismaService.gameHistory.findMany({
            where: { userId: userId },
            include: {
                user: true,
                opponent: true,
            },
        });

        if (!gameHistory || gameHistory.length === 0) {
            return [];
        }

        const matchesHistory: matchesHistoryType = gameHistory.map(history => {
            const {
                userScore,
                opponentScore,
                user: { avatarURL: userProfile },
                opponent: { avatarURL: opponentProfile },
            } = history;

            return {
                score: userScore,
                profile: userProfile,
                opponentScore,
                opponentProfile,
            };
        });

        return matchesHistory;
    } catch (error) {
        console.error('Error in calculateMatchesHistory() err:', error);
        return [];
    }
  }

/*----------------------------------------------------------------------------------------------------------------------------------------*/



  async getUser(userId: string): Promise<userProfileData | []> {
    try {
        const user: userProfileData = await this.prismaService.user.findUnique({
            where: { id: userId },
            select: {
              username: true,
              fullname: true,
              email: true,
              avatarURL: true,
              coalitionName: true,
              isOnline: true,
              userGamesXp: true,
            },
        });

        return user;
    } catch (error) {
        console.error('Error in calculateMatchesHistory() err:', error);
        return [];
    }
  }

/*----------------------------------------------------------------------------------------------------------------------------------------*/

//   async getFriends(userId: string): Promise<matchesHistoryType | []> {
    //     try {
        //         // return []; // TODO uncomment this logic after Rida modifies the database schema.
        //         const gameHistory = await this.prismaService.gameHistory.findMany({
//             where: { userId: userId },
//             include: {
//                 user: true,
//                 opponent: true,
//             },
//         });

//         return matchesHistory;
//     } catch (error) {
//         console.error('Error in calculateMatchesHistory() err:', error);
//         return [];
//     }
//   }


/*----------------------------------------------------------------------------------------------------------------------------------------*/

async updateUser(userData: UpdateUserDto, avatar: Express.Multer.File, userId: string): Promise<any> {
    const { fullname, username, coalition, isTwoFactor } = userData;

    const updateData: any = {};
    
    if (fullname) {
      updateData.fullname = fullname;;
    }
    if (username) {
      updateData.username = username;;
    }
    if (coalition) {
      updateData.coalitionName = coalition;;
    }
    if (isTwoFactor && isTwoFactor == 'true' || isTwoFactor == 'false') {
      updateData.twoFactorEnabled = isTwoFactor == 'true'? true : false
    }
    if (avatar) {
      updateData.avatarURL = `${process.env.SERVER_URL}profile/avatars/${avatar.filename}`;
    }

    try {
      const updatedUser = await this.prismaService.user.update({
        where: { id: userId },
        data: updateData,
      });

      return 'User informations updated successfully';
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

}

/*----------------------------------------------------------------------------------------------------------------------------------------*/



