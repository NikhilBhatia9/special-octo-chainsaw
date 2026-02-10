import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { Avatar } from '../../components/common/Avatar';
import { MatchCard } from '../../components/match/MatchCard';
import { QuickStats } from '../../components/home/QuickStats';
import { colors, typography, spacing } from '../../theme';
import { useAuth } from '../../hooks/useAuth';
import { useMatches } from '../../hooks/useMatches';
import { formatCurrency } from '../../utils/helpers';

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { user } = useAuth();
  const { matches, isLoading, loadMatches } = useMatches();

  useEffect(() => {
    loadMatches();
  }, []);

  const handleRefresh = () => {
    loadMatches();
  };

  const handleMatchPress = (matchId: string) => {
    navigation.navigate('MatchDetail', { matchId });
  };

  // Mock stats for demo
  const userStats = {
    activeTeams: 5,
    liveContests: 3,
    winRate: 68,
  };

  const featuredMatch = matches.find(m => m.status === 'UPCOMING') || matches[0];
  const upcomingMatches = matches.filter(m => m.status === 'UPCOMING').slice(0, 5);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.userName}>{user?.name || 'Player'}</Text>
        </View>
        <Avatar uri={user?.avatar} name={user?.name} size={48} />
      </View>

      <View style={styles.balanceCard}>
        <View>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balance}>
            {formatCurrency((user?.cashBalance || 0) + (user?.bonusBalance || 0))}
          </Text>
        </View>
        <View style={styles.balanceBreakdown}>
          <Text style={styles.balanceItem}>
            Cash: {formatCurrency(user?.cashBalance || 0)}
          </Text>
          <Text style={styles.balanceItem}>
            Bonus: {formatCurrency(user?.bonusBalance || 0)}
          </Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
        }
      >
        <QuickStats
          activeTeams={userStats.activeTeams}
          liveContests={userStats.liveContests}
          winRate={userStats.winRate}
        />

        {featuredMatch && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Match</Text>
            <MatchCard
              match={featuredMatch}
              onPress={() => handleMatchPress(featuredMatch.id)}
            />
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Matches</Text>
          {upcomingMatches.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              onPress={() => handleMatchPress(match.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.lg,
    backgroundColor: colors.surface,
  },
  greeting: {
    ...typography.body2,
    color: colors.textSecondary,
  },
  userName: {
    ...typography.h2,
    color: colors.textPrimary,
    fontWeight: '700',
  },
  balanceCard: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    marginHorizontal: spacing.md,
    marginVertical: spacing.md,
    borderRadius: 12,
  },
  balanceLabel: {
    ...typography.body2,
    color: colors.textInverse,
    marginBottom: spacing.xs,
  },
  balance: {
    ...typography.h1,
    color: colors.textInverse,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  balanceBreakdown: {
    flexDirection: 'row',
  },
  balanceItem: {
    ...typography.caption,
    color: colors.textInverse,
    marginRight: spacing.md,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
});
