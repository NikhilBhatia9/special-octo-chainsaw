import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '../../components/common/Button';
import { colors, typography, spacing } from '../../theme';
import { googleAuthService } from '../../services/googleAuth.service';

type AuthStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
};

interface OnboardingScreenProps {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Onboarding'>;
}

const ONBOARDING_STEPS = [
  {
    id: 1,
    emoji: '🏏',
    title: 'Choose Your Match',
    description: 'Select from upcoming cricket matches featuring New Zealand and international teams',
  },
  {
    id: 2,
    emoji: '⭐',
    title: 'Build Your Dream Team',
    description: 'Pick 11 players within budget, select captain & vice-captain to earn bonus points',
  },
  {
    id: 3,
    emoji: '🏆',
    title: 'Join Contests & Win',
    description: 'Compete in multiple contests, track live scores, and win real cash prizes',
  },
];

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = async () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Mark onboarding as seen
      await googleAuthService.setOnboardingSeen();
      navigation.navigate('Login');
    }
  };

  const handleSkip = async () => {
    // Mark onboarding as seen
    await googleAuthService.setOnboardingSeen();
    navigation.navigate('Login');
  };

  const step = ONBOARDING_STEPS[currentStep];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.emoji}>{step.emoji}</Text>
        <Text style={styles.title}>{step.title}</Text>
        <Text style={styles.description}>{step.description}</Text>

        <View style={styles.pagination}>
          {ONBOARDING_STEPS.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentStep && styles.activeDot,
              ]}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title={currentStep === ONBOARDING_STEPS.length - 1 ? "Get Started" : "Next"}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  skipButton: {
    alignSelf: 'flex-end',
    padding: spacing.md,
  },
  skipText: {
    ...typography.body1,
    color: colors.textInverse,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  emoji: {
    fontSize: 100,
    marginBottom: spacing.xl,
  },
  title: {
    ...typography.h1,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  description: {
    ...typography.body1,
    color: colors.textInverse,
    textAlign: 'center',
    lineHeight: 24,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: spacing.xxl,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.textSecondary,
    marginHorizontal: spacing.xs,
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: 24,
  },
  footer: {
    padding: spacing.lg,
  },
});
