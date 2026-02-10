import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
} from 'react-native';
import { MatchCard } from '../../components/match/MatchCard';
import { colors, typography, spacing } from '../../theme';
import { useMatches } from '../../hooks/useMatches';

interface MatchListScreenProps {
  navigation: any;
}

export const MatchListScreen: React.FC<MatchListScreenProps> = ({ navigation }) => {
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

  const liveMatches = matches.filter(m => m.status === 'LIVE');
  const upcomingMatches = matches.filter(m => m.status === 'UPCOMING');
  const completedMatches = matches.filter(m => m.status === 'COMPLETED');

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { type: 'section', title: 'Live Matches', data: liveMatches },
          { type: 'section', title: 'Upcoming Matches', data: upcomingMatches },
          { type: 'section', title: 'Completed Matches', data: completedMatches },
        ]}
        keyExtractor={(item, index) => `section-${index}`}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
        }
        renderItem={({ item }) => (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            {item.data.length === 0 ? (
              <Text style={styles.emptyText}>No matches</Text>
            ) : (
              item.data.map((match: any) => (
                <MatchCard
                  key={match.id}
                  match={match}
                  onPress={() => handleMatchPress(match.id)}
                />
              ))
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.md,
    marginTop: spacing.md,
  },
  emptyText: {
    ...typography.body1,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingVertical: spacing.lg,
  },
});
