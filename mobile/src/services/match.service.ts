import { Match, Player } from '../types/match.types';
import matchesData from '../data/matches.json';
import playersData from '../data/players.json';

export const matchService = {
  getMatches: async (): Promise<Match[]> => {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      return matchesData as Match[];
    } catch (error) {
      throw error;
    }
  },

  getMatchDetails: async (matchId: string): Promise<Match> => {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      const match = matchesData.find(m => m.id === matchId);
      if (!match) {
        throw new Error('Match not found');
      }
      return match as Match;
    } catch (error) {
      throw error;
    }
  },

  getMatchPlayers: async (matchId: string): Promise<Player[]> => {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      const players = playersData.filter(p => p.matchId === matchId);
      return players as Player[];
    } catch (error) {
      throw error;
    }
  },
};
