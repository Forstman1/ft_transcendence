export type achievementsType = {
  Bronze: boolean;
  Silver: boolean;
  Gold: boolean;
  Platinum: boolean;
  Emerald: boolean;
  Hamas: boolean;
};

export type AchievementThresholds = {
  Bronze: { xp: number; matches: number; rounds: number };
  Silver: { xp: number; matches: number; rounds: number };
  Gold: { xp: number; matches: number; rounds: number };
  Platinum: { xp: number; matches: number; rounds: number };
  Emerald: { xp: number; matches: number; rounds: number };
  Hamas: { xp: number; matches: number; rounds: number };
};

export type activitiesHistoryType = {
  labels: string[];
  values: number[];
};

export type matchesResultsType = {
  wins: number;
  loses: number;
  draws: number;
};

export type matchesHistoryType =  Array<{
    score: number;
    profile: string;
    opponentScore: number;
    opponentProfile: string;
}>

export type userProfileData = {
    id: string;
    username: string;
    fullname: string;
    email: string;
    avatarURL: string;
    coalitionName: string;
    isOnline: boolean;
    isInGame: boolean;
    userGamesXp: number;
}

