import { PrismaClient } from '@prisma/client';
import { MatchFilter } from '../types';

const prisma = new PrismaClient();

export const matchService = {
  async getAllMatches(filter?: MatchFilter) {
    try {
      const where: any = {};

      if (filter?.status) {
        where.status = filter.status;
      }

      if (filter?.format) {
        where.format = filter.format;
      }

      const matches = await prisma.match.findMany({
        where,
        orderBy: {
          startTime: 'asc',
        },
      });

      // Add contest count for each match
      const matchesWithContestCount = await Promise.all(
        matches.map(async (match) => {
          const contestCount = await prisma.contest.count({
            where: { matchId: match.id },
          });
          return {
            ...match,
            contestCount,
          };
        })
      );

      return matchesWithContestCount;
    } catch (error) {
      throw error;
    }
  },

  async getMatchById(matchId: string) {
    try {
      const match = await prisma.match.findUnique({
        where: { id: matchId },
      });

      if (!match) {
        throw new Error('Match not found');
      }

      const contestCount = await prisma.contest.count({
        where: { matchId: match.id },
      });

      return {
        ...match,
        contestCount,
      };
    } catch (error) {
      throw error;
    }
  },

  async getMatchPlayers(matchId: string) {
    try {
      const players = await prisma.player.findMany({
        where: { matchId },
        orderBy: {
          credits: 'desc',
        },
      });

      return players;
    } catch (error) {
      throw error;
    }
  },
};
