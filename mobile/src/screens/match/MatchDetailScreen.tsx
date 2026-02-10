import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Button } from '../../components/common/Button';
import { PlayerCard } from '../../components/match/PlayerCard';
import { colors, typography, spacing } from '../../theme';
import { useMatches } from '../../hooks/useMatches';
import { formatDateTime, getTimeRemaining } from '../../utils/helpers';

interface MatchDetailScreenProps {
  route: any;
  navigation: any;
}

export const MatchDetailScreen: React.FC<MatchDetailScreenProps> = ({ route, navigation }) => {
  const { matchId } = route.params;
  const { selectedMatch, players, isLoading, loadMatchDetails } = useMatches();

  useEffect(() => {
    loadMatchDetails(matchId);
  }, [matchId]);

  if (isLoading || !selectedMatch) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const timeRemaining = getTimeRemaining(selectedMatch.startTime);

  const wicketKeepers = players.filter(p => p.role === 'WICKET_KEEPER');
  const batsmen = players.filter(p => p.role === 'BATSMAN');
  const allRounders = players.filter(p => p.role === 'ALL_ROUNDER');
  const bowlers = players.filter(p => p.role === 'BOWLER');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.teamsRow}>
          <Text style={styles.team}>{selectedMatch.homeTeam}</Text>
          <Text style={styles.vs}>VS</Text>
          <Text style={styles.team}>{selectedMatch.awayTeam}</Text>
        </View>
        <Text style={styles.venue}>{selectedMatch.venue}</Text>
        <Text style={styles.time}>{formatDateTime(selectedMatch.startTime)}</Text>
        <Text style={styles.timeRemaining}>{timeRemaining}</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {selectedMatch.pitchReport && (
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Pitch Report</Text>
            <Text style={styles.infoText}>{selectedMatch.pitchReport}</Text>
          </View>
        )}

        {selectedMatch.weather && (
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Weather</Text>
            <Text style={styles.infoText}>{selectedMatch.weather}</Text>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Wicket Keepers ({wicketKeepers.length})
          </Text>
          {wicketKeepers.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Batsmen ({batsmen.length})
          </Text>
          {batsmen.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            All-Rounders ({allRounders.length})
          </Text>
          {allRounders.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Bowlers ({bowlers.length})
          </Text>
          {bowlers.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Create Team"
          onPress={() => navigation.navigate('TeamBuilder', { matchId })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  teamsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  team: {
    ...typography.h3,
    color: colors.textPrimary,
    fontWeight: '700',
  },
  vs: {
    ...typography.body2,
    color: colors.textSecondary,
    marginHorizontal: spacing.md,
  },
  venue: {
    ...typography.body2,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  time: {
    ...typography.body2,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  timeRemaining: {
    ...typography.body1,
    color: colors.primary,
    textAlign: 'center',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  infoCard: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    marginHorizontal: spacing.lg,
    marginTop: spacing.md,
    borderRadius: 8,
  },
  infoTitle: {
    ...typography.body1,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  infoText: {
    ...typography.body2,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  footer: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
