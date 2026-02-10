export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  cashBalance: number;
  bonusBalance: number;
  level: number;
  xp: number;
  stats: UserStats;
}

export interface UserStats {
  activeTeams: number;
  liveContests: number;
  winRate: number;
  totalMatches: number;
  totalWinnings: number;
}

export interface UserState {
  profile: UserProfile | null;
  isLoading: boolean;
  error: string | null;
}
