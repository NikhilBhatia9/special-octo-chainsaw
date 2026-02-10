import { Request } from 'express';

export interface AuthRequest extends Request {
  user?: {
    uid: string;
    email?: string;
    name?: string;
  };
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface MatchFilter {
  status?: 'UPCOMING' | 'LIVE' | 'COMPLETED';
  format?: 'T20' | 'ODI' | 'TEST';
}

export interface ContestFilter {
  matchId?: string;
  type?: string;
}
