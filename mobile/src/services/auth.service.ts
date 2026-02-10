import api from './api';
import { User, AuthResponse } from '../types/auth.types';

export const authService = {
  loginWithGoogle: async (idToken: string): Promise<AuthResponse> => {
    try {
      const response = await api.post('/api/auth/google', { idToken });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getCurrentUser: async (): Promise<User> => {
    try {
      const response = await api.get('/api/auth/me');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout: async (): Promise<void> => {
    try {
      await api.post('/api/auth/logout');
    } catch (error) {
      throw error;
    }
  },
};
