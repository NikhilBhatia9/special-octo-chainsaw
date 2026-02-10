import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { MatchListScreen } from '../screens/match/MatchListScreen';
import { MatchDetailScreen } from '../screens/match/MatchDetailScreen';
import { colors, typography } from '../theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="MatchDetail" 
        component={MatchDetailScreen}
        options={{ title: 'Match Details' }}
      />
    </Stack.Navigator>
  );
};

const MatchesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MatchList" 
        component={MatchListScreen}
        options={{ title: 'Matches' }}
      />
      <Stack.Screen 
        name="MatchDetail" 
        component={MatchDetailScreen}
        options={{ title: 'Match Details' }}
      />
    </Stack.Navigator>
  );
};

export const MainNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: {
          ...typography.caption,
          fontWeight: '600',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: () => '🏠',
        }}
      />
      <Tab.Screen 
        name="MatchesTab" 
        component={MatchesStack}
        options={{
          title: 'Matches',
          tabBarIcon: () => '🏏',
        }}
      />
      <Tab.Screen 
        name="ContestsTab" 
        component={HomeScreen}
        options={{
          title: 'Contests',
          tabBarIcon: () => '🏆',
        }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={HomeScreen}
        options={{
          title: 'Profile',
          tabBarIcon: () => '👤',
        }}
      />
    </Tab.Navigator>
  );
};
