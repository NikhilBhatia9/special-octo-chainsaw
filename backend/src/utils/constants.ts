// API Configuration
export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || 'development';

// Database
export const DATABASE_URL = process.env.DATABASE_URL;

// Firebase
export const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
export const FIREBASE_CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL;
export const FIREBASE_PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY;

// App Constants
export const MAX_TEAM_PLAYERS = 11;
export const MAX_TEAM_CREDITS = 100;

// Contest Types
export const CONTEST_TYPES = {
  MEGA: 'MEGA',
  SMALL: 'SMALL',
  HEAD_TO_HEAD: 'HEAD_TO_HEAD',
  PRACTICE: 'PRACTICE',
};

// Match Status
export const MATCH_STATUS = {
  UPCOMING: 'UPCOMING',
  LIVE: 'LIVE',
  COMPLETED: 'COMPLETED',
};

// Transaction Types
export const TRANSACTION_TYPES = {
  DEPOSIT: 'DEPOSIT',
  WITHDRAWAL: 'WITHDRAWAL',
  CONTEST_ENTRY: 'CONTEST_ENTRY',
  PRIZE_WINNING: 'PRIZE_WINNING',
  BONUS_CREDIT: 'BONUS_CREDIT',
};
