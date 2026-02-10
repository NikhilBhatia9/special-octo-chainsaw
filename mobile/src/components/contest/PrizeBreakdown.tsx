import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '../common/Card';
import { colors, typography, spacing } from '../../theme';
import { formatCurrency } from '../../utils/helpers';

interface Prize {
  id: string;
  rankFrom: number;
  rankTo: number;
  amount: number;
}

interface PrizeBreakdownProps {
  prizes: Prize[];
}

export const PrizeBreakdown: React.FC<PrizeBreakdownProps> = ({ prizes }) => {
  const renderPrizeRow = (prize: Prize) => {
    const rank = prize.rankFrom === prize.rankTo
      ? `#${prize.rankFrom}`
      : `#${prize.rankFrom} - #${prize.rankTo}`;

    return (
      <View key={prize.id} style={styles.prizeRow}>
        <Text style={styles.rank}>{rank}</Text>
        <Text style={styles.amount}>{formatCurrency(prize.amount)}</Text>
      </View>
    );
  };

  return (
    <Card style={styles.card}>
      <Text style={styles.title}>Prize Breakdown</Text>
      <ScrollView style={styles.scrollView}>
        {prizes.map(renderPrizeRow)}
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    maxHeight: 400,
  },
  title: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  scrollView: {
    maxHeight: 300,
  },
  prizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  rank: {
    ...typography.body1,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  amount: {
    ...typography.body1,
    color: colors.primary,
    fontWeight: '600',
  },
});
