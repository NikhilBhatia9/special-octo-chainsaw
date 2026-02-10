import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button } from '../../components/common/Button';
import { colors, typography, spacing } from '../../theme';
import { useAuth } from '../../hooks/useAuth';
import { googleAuthService } from '../../services/googleAuth.service';

interface LoginScreenProps {
  navigation?: unknown;
}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  const { login, isLoading } = useAuth();
  const [signingIn, setSigningIn] = useState(false);

  const handleGoogleLogin = async () => {
    setSigningIn(true);
    try {
      // Configure Google Sign-In
      await googleAuthService.configure();
      
      // Sign in with Google
      const { idToken } = await googleAuthService.signIn();
      
      // Send ID token to backend and login
      await login(idToken);
      
      // Navigation will be handled automatically by RootNavigator
      // based on auth state change
    } catch (error) {
      console.error('Login failed:', error);
      
      // Handle specific error cases
      let errorMessage = 'Failed to sign in with Google';
      
      const err = error as { code?: string };
      if (err.code === 'SIGN_IN_CANCELLED') {
        errorMessage = 'Sign in was cancelled';
      } else if (err.code === 'IN_PROGRESS') {
        errorMessage = 'Sign in is already in progress';
      } else if (err.code === 'PLAY_SERVICES_NOT_AVAILABLE') {
        errorMessage = 'Google Play Services not available';
      }
      
      Alert.alert('Login Error', errorMessage);
    } finally {
      setSigningIn(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🏆</Text>
          <Text style={styles.appName}>DreamTeam</Text>
          <Text style={styles.tagline}>Fantasy Sports for New Zealand</Text>
        </View>

        <View style={styles.features}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>⚡</Text>
            <Text style={styles.featureText}>Create unlimited teams</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>💰</Text>
            <Text style={styles.featureText}>Win real cash prizes</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🔒</Text>
            <Text style={styles.featureText}>100% safe & secure</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          title="Continue with Google"
          onPress={handleGoogleLogin}
          loading={isLoading || signingIn}
          style={styles.googleButton}
        />
        <Text style={styles.disclaimer}>
          By continuing, you agree to our Terms & Conditions and Privacy Policy
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
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
    textAlign: 'center',
  },
  features: {
    width: '100%',
    marginTop: spacing.xl,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  featureIcon: {
    fontSize: 24,
    marginRight: spacing.md,
  },
  featureText: {
    ...typography.body1,
    color: colors.textInverse,
  },
  footer: {
    padding: spacing.lg,
  },
  googleButton: {
    marginBottom: spacing.md,
  },
  disclaimer: {
    ...typography.caption,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 16,
  },
});
