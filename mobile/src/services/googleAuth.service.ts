import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GOOGLE_WEB_CLIENT_ID } from '../utils/constants';
import { User } from '../types/user.types';

// Storage keys
const AUTH_TOKEN_KEY = '@dreamteam:authToken';
const USER_DATA_KEY = '@dreamteam:userData';
const ONBOARDING_KEY = '@dreamteam:hasSeenOnboarding';

export interface GoogleAuthUser {
  idToken: string;
  user: {
    id: string;
    email: string;
    name: string;
    photo?: string;
  };
}

class GoogleAuthService {
  private isConfigured = false;

  /**
   * Configure Google Sign-In
   * Should be called once when the app starts
   */
  async configure() {
    if (this.isConfigured) return;

    try {
      GoogleSignin.configure({
        webClientId: GOOGLE_WEB_CLIENT_ID,
        offlineAccess: true,
      });
      this.isConfigured = true;
    } catch (error) {
      console.error('Error configuring Google Sign-In:', error);
      throw error;
    }
  }

  /**
   * Sign in with Google
   * Returns the ID token to be sent to the backend
   */
  async signIn(): Promise<GoogleAuthUser> {
    try {
      // Ensure Google Sign-In is configured
      await this.configure();

      // Check if device supports Google Play Services (Android)
      await GoogleSignin.hasPlayServices();

      // Get user info and ID token
      const { idToken, user } = await GoogleSignin.signIn();

      if (!idToken) {
        throw new Error('No ID token received from Google Sign-In');
      }

      // Sign in to Firebase with Google credential
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);

      return {
        idToken,
        user: {
          id: user.id,
          email: user.email,
          name: user.name || '',
          photo: user.photo || undefined,
        },
      };
    } catch (error) {
      console.error('Google Sign-In error:', error);
      throw error;
    }
  }

  /**
   * Sign out from Google and Firebase
   */
  async signOut(): Promise<void> {
    try {
      // Sign out from Google
      await GoogleSignin.signOut();
      
      // Sign out from Firebase
      await auth().signOut();
      
      // Clear stored data
      await this.clearStoredData();
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  }

  /**
   * Check if user is currently signed in
   */
  async isSignedIn(): Promise<boolean> {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      return isSignedIn;
    } catch (error) {
      console.error('Error checking sign-in status:', error);
      return false;
    }
  }

  /**
   * Get current Firebase user
   */
  getCurrentFirebaseUser() {
    return auth().currentUser;
  }

  /**
   * Store auth token
   */
  async storeAuthToken(token: string): Promise<void> {
    try {
      await AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
    } catch (error) {
      console.error('Error storing auth token:', error);
    }
  }

  /**
   * Get stored auth token
   */
  async getAuthToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(AUTH_TOKEN_KEY);
    } catch (error) {
      console.error('Error getting auth token:', error);
      return null;
    }
  }

  /**
   * Store user data
   */
  async storeUserData(userData: User): Promise<void> {
    try {
      await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
    } catch (error) {
      console.error('Error storing user data:', error);
    }
  }

  /**
   * Get stored user data
   */
  async getUserData(): Promise<User | null> {
    try {
      const data = await AsyncStorage.getItem(USER_DATA_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  }

  /**
   * Clear all stored authentication data
   */
  async clearStoredData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([AUTH_TOKEN_KEY, USER_DATA_KEY]);
    } catch (error) {
      console.error('Error clearing stored data:', error);
    }
  }

  /**
   * Check if user has seen onboarding
   */
  async hasSeenOnboarding(): Promise<boolean> {
    try {
      const value = await AsyncStorage.getItem(ONBOARDING_KEY);
      return value === 'true';
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      return false;
    }
  }

  /**
   * Mark onboarding as seen
   */
  async setOnboardingSeen(): Promise<void> {
    try {
      await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
    } catch (error) {
      console.error('Error setting onboarding status:', error);
    }
  }
}

export const googleAuthService = new GoogleAuthService();
