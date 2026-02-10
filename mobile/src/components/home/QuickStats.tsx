import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../common/Card';
import { colors, typography, spacing } from '../../theme';

interface QuickStatsProps {
  activeTeams: number;
  liveContests: number;
  winRate: number;
}

export const QuickStats: React.FC<QuickStatsProps> = ({
  activeTeams,
  liveContests,
  winRate,
}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.statCard}>
        <Text style={styles.statValue}>{activeTeams}</Text>
        <Text style={styles.statLabel}>Active Teams</Text>
      </Card>
      <Card style={styles.statCard}>
        <Text style={styles.statValue}>{liveContests}</Text>
        <Text style={styles.statLabel}>Live Contests</Text>
      </Card>
      <Card style={styles.statCard}>
        <Text style={styles.statValue}>{winRate}%</Text>
        <Text style={styles.statLabel}>Win Rate</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing.md,
  },
  statCard: {
    flex: 1,
    marginHorizontal: spacing.xs,
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  statValue: {
    ...typography.h2,
    color: colors.primary,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  statLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
