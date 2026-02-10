import { Response } from 'express';
import { AuthRequest } from '../types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userController = {
  async getUserProfile(req: AuthRequest, res: Response) {
    try {
      if (!req.user?.uid) {
        return res.status(401).json({
          success: false,
          error: 'Unauthorized',
        });
      }

      const user = await prisma.user.findUnique({
        where: { googleId: req.user.uid },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          error: 'User not found',
        });
      }

      // Get user statistics
      const activeTeams = await prisma.team.count({
        where: { userId: user.id },
      });

      const liveContests = await prisma.contestEntry.count({
        where: {
          userId: user.id,
          contest: {
            match: {
              status: 'LIVE',
            },
          },
        },
      });

      const totalMatches = await prisma.contestEntry.count({
        where: { userId: user.id },
      });

      const totalWinnings = await prisma.transaction.aggregate({
        where: {
          userId: user.id,
          type: 'PRIZE_WINNING',
          status: 'COMPLETED',
        },
        _sum: {
          amount: true,
        },
      });

      const profile = {
        ...user,
        stats: {
          activeTeams,
          liveContests,
          winRate: totalMatches > 0 ? Math.round((liveContests / totalMatches) * 100) : 0,
          totalMatches,
          totalWinnings: totalWinnings._sum.amount || 0,
        },
      };

      res.status(200).json({
        success: true,
        data: profile,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to fetch profile',
      });
    }
  },
};
