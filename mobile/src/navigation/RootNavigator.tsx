import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import { useAuth } from '../hooks/useAuth';

export const RootNavigator: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [showOnboarding, setShowOnboarding] = useState(true);

  // In a real app, check if user has seen onboarding from AsyncStorage
  useEffect(() => {
    // const checkOnboarding = async () => {
    //   const hasSeenOnboarding = await AsyncStorage.getItem('hasSeenOnboarding');
    //   setShowOnboarding(!hasSeenOnboarding);
    // };
    // checkOnboarding();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
