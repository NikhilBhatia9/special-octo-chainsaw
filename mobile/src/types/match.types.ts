export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamFlag: string;
  awayTeamFlag: string;
  venue: string;
  startTime: string;
  format: 'T20' | 'ODI' | 'TEST';
  series: string;
  status: 'UPCOMING' | 'LIVE' | 'COMPLETED';
  contestCount: number;
  pitchReport?: string;
  weather?: string;
}

export interface Player {
  id: string;
  name: string;
  team: string;
  role: 'BATSMAN' | 'BOWLER' | 'ALL_ROUNDER' | 'WICKET_KEEPER';
  credits: number;
  points: number;
  matchId: string;
  stats: PlayerStats;
  selectedBy: number;
  image?: string;
}

export interface PlayerStats {
  recentScores?: number[];
  recentWickets?: number[];
  battingAverage?: number;
  bowlingAverage?: number;
  strikeRate?: number;
  economy?: number;
}

export interface MatchState {
  matches: Match[];
  selectedMatch: Match | null;
  players: Player[];
  isLoading: boolean;
  error: string | null;
}
