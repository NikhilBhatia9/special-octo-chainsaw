import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../common/Card';
import { Avatar } from '../common/Avatar';
import { colors, typography, spacing } from '../../theme';
import { Player } from '../../types/match.types';
import { getPlayerRoleColor } from '../../utils/helpers';

interface PlayerCardProps {
  player: Player;
  onPress?: () => void;
  isSelected?: boolean;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  onPress,
  isSelected = false,
}) => {
  const roleColor = getPlayerRoleColor(player.role);

  return (
    <Card
      onPress={onPress}
      style={[styles.card, isSelected && styles.selectedCard]}
    >
      <View style={styles.header}>
        <Avatar uri={player.image} name={player.name} size={40} />
        <View style={styles.playerInfo}>
          <Text style={styles.playerName} numberOfLines={1}>
            {player.name}
          </Text>
          <View style={styles.teamRole}>
            <Text style={styles.team}>{player.team}</Text>
            <View style={[styles.roleBadge, { backgroundColor: roleColor }]}>
              <Text style={styles.roleText}>
                {player.role.replace('_', ' ')}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.stats}>
          <Text style={styles.points}>{player.points} pts</Text>
          <Text style={styles.selectedBy}>Sel by {player.selectedBy}%</Text>
        </View>
        <View style={styles.creditsContainer}>
          <Text style={styles.credits}>{player.credits}</Text>
          <Text style={styles.creditsLabel}>CR</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.sm,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight + '10',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  playerInfo: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  playerName: {
    ...typography.body1,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: 2,
  },
  teamRole: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  team: {
    ...typography.caption,
    color: colors.textSecondary,
    marginRight: spacing.xs,
  },
  roleBadge: {
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
    borderRadius: 4,
  },
  roleText: {
    ...typography.caption,
    color: colors.textInverse,
    fontSize: 10,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stats: {
    flex: 1,
  },
  points: {
    ...typography.body2,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  selectedBy: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  creditsContainer: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 6,
    alignItems: 'center',
  },
  credits: {
    ...typography.body1,
    color: colors.textPrimary,
    fontWeight: '700',
  },
  creditsLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    fontSize: 10,
  },
});
