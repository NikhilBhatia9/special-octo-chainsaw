import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../common/Card';
import { colors, typography, spacing } from '../../theme';
import { Match } from '../../types/match.types';
import { formatDateTime, getTimeRemaining } from '../../utils/helpers';

interface MatchCardProps {
  match: Match;
  onPress?: () => void;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match, onPress }) => {
  const timeRemaining = getTimeRemaining(match.startTime);
  const isLive = match.status === 'LIVE';

  return (
    <Card onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <View style={styles.matchInfo}>
          <Text style={styles.series}>{match.series}</Text>
          <Text style={styles.format}>{match.format}</Text>
        </View>
        {isLive && (
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        )}
      </View>

      <View style={styles.teamsContainer}>
        <View style={styles.team}>
          <Text style={styles.teamFlag}>{match.homeTeamFlag}</Text>
          <Text style={styles.teamName}>{match.homeTeam}</Text>
        </View>

        <Text style={styles.vs}>VS</Text>

        <View style={styles.team}>
          <Text style={styles.teamFlag}>{match.awayTeamFlag}</Text>
          <Text style={styles.teamName}>{match.awayTeam}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.venue}>{match.venue}</Text>
          <Text style={styles.time}>{formatDateTime(match.startTime)}</Text>
        </View>
        <View style={styles.rightFooter}>
          <Text style={styles.timeRemaining}>{timeRemaining}</Text>
          <Text style={styles.contestCount}>{match.contestCount} Contests</Text>
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
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  matchInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  series: {
    ...typography.body2,
    color: colors.textPrimary,
    fontWeight: '600',
    marginRight: spacing.sm,
  },
  format: {
    ...typography.caption,
    color: colors.textSecondary,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: 4,
  },
  liveBadge: {
    backgroundColor: colors.error,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: 4,
  },
  liveText: {
    ...typography.caption,
    color: colors.textInverse,
    fontWeight: '700',
  },
  teamsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  team: {
    flex: 1,
    alignItems: 'center',
  },
  teamFlag: {
    fontSize: 32,
    marginBottom: spacing.xs,
  },
  teamName: {
    ...typography.body1,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  vs: {
    ...typography.body2,
    color: colors.textSecondary,
    fontWeight: '700',
    marginHorizontal: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.sm,
  },
  venue: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  time: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  rightFooter: {
    alignItems: 'flex-end',
  },
  timeRemaining: {
    ...typography.body2,
    color: colors.primary,
    fontWeight: '600',
  },
  contestCount: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
