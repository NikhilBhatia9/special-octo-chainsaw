import api from './api';
import { User, AuthResponse } from '../types/auth.types';
import { googleAuthService } from './googleAuth.service';

export const authService = {
  loginWithGoogle: async (idToken: string): Promise<AuthResponse> => {
    const response = await api.post('/api/auth/google', { idToken });
    const { user, token } = response.data;
    
    // Store auth token and user data
    await googleAuthService.storeAuthToken(token);
    await googleAuthService.storeUserData(user);
    
    return response.data;
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await api.get('/api/auth/me');
    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post('/api/auth/logout');
    await googleAuthService.signOut();
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
