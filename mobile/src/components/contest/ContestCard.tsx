import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../common/Card';
import { colors, typography, spacing } from '../../theme';
import { formatCurrency } from '../../utils/helpers';

interface Contest {
  id: string;
  name: string;
  entryFee: number;
  prizePool: number;
  totalSpots: number;
  spotsLeft: number;
  type: string;
}

interface ContestCardProps {
  contest: Contest;
  onPress?: () => void;
}

export const ContestCard: React.FC<ContestCardProps> = ({ contest, onPress }) => {
  const fillPercentage = ((contest.totalSpots - contest.spotsLeft) / contest.totalSpots) * 100;
  const isFree = contest.entryFee === 0;

  return (
    <Card onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{contest.name}</Text>
          <Text style={styles.type}>{contest.type}</Text>
        </View>
        <View style={styles.prizeContainer}>
          <Text style={styles.prizeLabel}>Prize Pool</Text>
          <Text style={styles.prize}>{formatCurrency(contest.prizePool)}</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${fillPercentage}%` }]} />
        </View>
        <Text style={styles.spotsText}>
          {contest.spotsLeft} spots left of {contest.totalSpots}
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.entryFeeContainer}>
          <Text style={styles.entryLabel}>Entry</Text>
          <Text style={[styles.entryFee, isFree && styles.freeEntry]}>
            {isFree ? 'FREE' : formatCurrency(contest.entryFee)}
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  name: {
    ...typography.body1,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  type: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  prizeContainer: {
    alignItems: 'flex-end',
  },
  prizeLabel: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  prize: {
    ...typography.h3,
    color: colors.primary,
    fontWeight: '700',
  },
  progressContainer: {
    marginVertical: spacing.sm,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.background,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: spacing.xs,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  spotsText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.sm,
  },
  entryFeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  entryLabel: {
    ...typography.body2,
    color: colors.textSecondary,
    marginRight: spacing.xs,
  },
  entryFee: {
    ...typography.body1,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  freeEntry: {
    color: colors.success,
  },
});
