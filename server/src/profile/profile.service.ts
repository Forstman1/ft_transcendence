import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { achievementsType, AchievementThresholds, activitiesHistoryType } from './types/types';
import { GameHistory } from '@prisma/client';

@Injectable()
export class ProfileService {
  constructor(private prismaService: PrismaService) {}
  async findGameHistory(userId: string): Promise<GameHistory[] | null> {
    try {
      const gameHistoryData: GameHistory[] | null = await this.prismaService.gameHistory.findMany({
        where: { userId: userId },
      });
  
      return gameHistoryData;
    } catch (error) {
      console.error('Error fetching game history data:', error);
      return null;
    }
  }

  calculateTotalXP(gameHistory: GameHistory[]): number {
    return gameHistory.reduce((totalXP, entry) => totalXP + entry.xp, 0);
  }

  determineAchievements(gameHistory: GameHistory[]): achievementsType {
    const totalXP = this.calculateTotalXP(gameHistory);
    const totalMatches = gameHistory.length;
    const totalRounds = gameHistory.reduce((total, entry) => total + entry.rounds, 0);
  

    const thresholds: AchievementThresholds = {
      Bronze: { xp: 100, matches: 2, rounds: 15 },
      Silver: { xp: 200, matches: 10, rounds: 50 },
      Gold: { xp: 300, matches: 20, rounds: 100 },
      Platinum: { xp: 400, matches: 30, rounds: 150 },
      Emerald: { xp: 500, matches: 50, rounds: 250 },
      Hamas: { xp: 600, matches: 60, rounds: 300 },
    };
  
    const achievements: achievementsType = Object.fromEntries(
      Object.entries(thresholds).map(([key, value]) => [key, totalXP >= value.xp && totalMatches >= value.matches && totalRounds >= value.rounds])
    ) as achievementsType;

    return achievements;
  }

  async calculateChartData(userId: string): Promise<activitiesHistoryType | null> {
    const gameHistory = await this.prismaService.gameHistory.findMany({
      where: { userId: userId },
      orderBy: { createdAt: 'asc' },
    });
    
    console.log(`id:${userId}, length:${gameHistory.length}`);
    const matchesPerMonth: number[] = [];
    const labels: string[] = [];
  
    // Keep track of the starting month
    let startMonth = -1;
  
    gameHistory.forEach(entry => {
      const entryMonth = new Date(entry.createdAt).getMonth();
      const monthName = new Date(entry.createdAt).toLocaleString('en-US', { month: 'long' });
  
      // Check if the month is encountered for the first time
      if (!labels.includes(monthName)) {
        labels.push(monthName);
        matchesPerMonth.push(0);
      }
  
      // Update matches for the corresponding month
      matchesPerMonth[labels.indexOf(monthName)] += entry.matches || 0;
  
      // Track the starting month
      if (startMonth === -1 || entryMonth < startMonth) {
        startMonth = entryMonth;
      }
    });
  
    // Adjust labels and matches to start from the actual starting month
    const adjustedLabels = labels.slice(startMonth).concat(labels.slice(0, startMonth));
    const adjustedMatches = matchesPerMonth.slice(startMonth).concat(matchesPerMonth.slice(0, startMonth));
  
    const data: activitiesHistoryType = {
      labels: adjustedLabels,
      values: adjustedMatches,
    };
  
    return data;
  }


}
