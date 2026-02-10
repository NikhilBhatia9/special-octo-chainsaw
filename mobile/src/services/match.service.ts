import api from './api';
import { Match, Player } from '../types/match.types';

export const matchService = {
  getMatches: async (): Promise<Match[]> => {
    try {
      const response = await api.get('/api/matches');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getMatchDetails: async (matchId: string): Promise<Match> => {
    try {
      const response = await api.get(`/api/matches/${matchId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getMatchPlayers: async (matchId: string): Promise<Player[]> => {
    try {
      const response = await api.get(`/api/matches/${matchId}/players`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
