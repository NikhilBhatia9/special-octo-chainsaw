import api from './api';
import { User, AuthResponse } from '../types/auth.types';
import { googleAuthService } from './googleAuth.service';

export const authService = {
  loginWithGoogle: async (idToken: string): Promise<AuthResponse> => {
    try {
      const response = await api.post('/api/auth/google', { idToken });
      const { user, token } = response.data;
      
      // Store auth token and user data
      await googleAuthService.storeAuthToken(token);
      await googleAuthService.storeUserData(user);
      
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
      await googleAuthService.signOut();
    } catch (error) {
      throw error;
    }
  },

  // Get stored auth token
  getStoredToken: async (): Promise<string | null> => {
    return await googleAuthService.getAuthToken();
  },

  // Get stored user data
  getStoredUser: async (): Promise<User | null> => {
    return await googleAuthService.getUserData();
  },
};
