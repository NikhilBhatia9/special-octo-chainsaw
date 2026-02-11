import { User, AuthResponse } from '../types/auth.types';
import usersData from '../data/users.json';

export const authService = {
  loginWithGoogle: async (idToken: string): Promise<AuthResponse> => {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // For mock, use the first user
      const user = usersData[0] as User;
      
      return {
        user: {
          ...user,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        token: 'mock-jwt-token-' + Date.now(),
      };
    } catch (error) {
      throw error;
    }
  },

  getCurrentUser: async (): Promise<User> => {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // For mock, use the first user
      const user = usersData[0] as User;
      
      return {
        ...user,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    } catch (error) {
      throw error;
    }
  },

  logout: async (): Promise<void> => {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      // Nothing to do for mock
    } catch (error) {
      throw error;
    }
  },
};
