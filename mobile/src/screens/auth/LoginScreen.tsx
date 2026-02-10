import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from '../../components/common/Button';
import { colors, typography, spacing } from '../../theme';
import { useAuth } from '../../hooks/useAuth';

interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { login, isLoading } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      // In a real app, this would trigger Google Sign-In
      // const { idToken } = await GoogleSignin.signIn();
      // await login(idToken);
      
      // For demo purposes, navigate to home
      console.log('Google login initiated');
      // navigation.replace('Main');
    } catch (error) {
      console.error('Login failed:', error);
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
          loading={isLoading}
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
