// API Configuration
export const API_BASE_URL = __DEV__ 
  ? 'http://localhost:3000' 
  : 'https://api.dreamteam.co.nz';

// App Configuration
export const APP_NAME = 'DreamTeam';
export const APP_VERSION = '1.0.0';

// Google OAuth Configuration
export const GOOGLE_WEB_CLIENT_ID = 'your-google-web-client-id';

// Team Building Constants
export const MAX_TEAM_PLAYERS = 11;
export const MAX_TEAM_CREDITS = 100;
export const MIN_WICKET_KEEPERS = 1;
export const MAX_WICKET_KEEPERS = 4;
export const MIN_BATSMEN = 3;
export const MAX_BATSMEN = 6;
export const MIN_ALL_ROUNDERS = 1;
export const MAX_ALL_ROUNDERS = 4;
export const MIN_BOWLERS = 3;
export const MAX_BOWLERS = 6;
export const MAX_PLAYERS_PER_TEAM = 7;

// Points System
export const POINTS = {
  RUN: 1,
  BOUNDARY: 1,
  SIX: 2,
  WICKET: 25,
  CATCH: 8,
  STUMPING: 12,
  RUN_OUT: 6,
  MAIDEN_OVER: 12,
  CAPTAIN_MULTIPLIER: 2,
  VICE_CAPTAIN_MULTIPLIER: 1.5,
};

// Contest Types
export const CONTEST_TYPES = {
  MEGA: 'MEGA',
  SMALL: 'SMALL',
  HEAD_TO_HEAD: 'HEAD_TO_HEAD',
  PRACTICE: 'PRACTICE',
};

// Match Formats
export const MATCH_FORMATS = {
  T20: 'T20',
  ODI: 'ODI',
  TEST: 'TEST',
};

// Match Status
export const MATCH_STATUS = {
  UPCOMING: 'UPCOMING',
  LIVE: 'LIVE',
  COMPLETED: 'COMPLETED',
};

// Player Roles
export const PLAYER_ROLES = {
  BATSMAN: 'BATSMAN',
  BOWLER: 'BOWLER',
  ALL_ROUNDER: 'ALL_ROUNDER',
  WICKET_KEEPER: 'WICKET_KEEPER',
};

// Transaction Types
export const TRANSACTION_TYPES = {
  DEPOSIT: 'DEPOSIT',
  WITHDRAWAL: 'WITHDRAWAL',
  CONTEST_ENTRY: 'CONTEST_ENTRY',
  PRIZE_WINNING: 'PRIZE_WINNING',
  BONUS_CREDIT: 'BONUS_CREDIT',
};

// NZ Specific
export const NZ_CURRENCY = 'NZD';
export const NZ_CURRENCY_SYMBOL = '$';
