import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, typography, spacing } from '../../theme';
import { useAuth } from '../../hooks/useAuth';
import { googleAuthService } from '../../services/googleAuth.service';

type AuthStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
};

interface SplashScreenProps {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Splash'>;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const { restoreAuth, isAuthenticated } = useAuth();

  useEffect(() => {
    // Initialize app on mount only
    // We don't want to re-run when auth state changes during initialization
    initializeApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initializeApp = async () => {
    try {
      // Configure Google Sign-In
      await googleAuthService.configure();

      // Check if user has seen onboarding
      const hasSeenOnboarding = await googleAuthService.hasSeenOnboarding();

      // Try to restore auth state from storage
      await restoreAuth();

      // Wait a bit for splash screen effect
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Navigate based on onboarding and auth state
      if (!hasSeenOnboarding) {
        navigation.replace('Onboarding');
      } else if (!isAuthenticated) {
        navigation.replace('Login');
      }
      // If authenticated, RootNavigator will switch to MainNavigator automatically
    } catch (error) {
      console.error('Initialization error:', error);
      // On error, show onboarding
      navigation.replace('Onboarding');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🏆</Text>
        <Text style={styles.appName}>DreamTeam</Text>
        <Text style={styles.tagline}>Fantasy Sports for NZ</Text>
      </View>
      <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  logo: {
    fontSize: 80,
    marginBottom: spacing.md,
  },
  appName: {
    ...typography.h1,
    color: colors.primary,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  tagline: {
    ...typography.body1,
    color: colors.textInverse,
  },
  loader: {
    marginTop: spacing.xl,
  },
});
