import { Request, Response } from 'express';
import { matchService } from '../services/match.service';
import { MatchFilter } from '../types';

export const matchController = {
  async getAllMatches(req: Request, res: Response) {
    try {
      const filter: MatchFilter = {
        status: req.query.status as any,
        format: req.query.format as any,
      };

      const matches = await matchService.getAllMatches(filter);

      res.status(200).json({
        success: true,
        data: matches,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to fetch matches',
      });
    }
  },

  async getMatchById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const match = await matchService.getMatchById(id);

      res.status(200).json({
        success: true,
        data: match,
      });
    } catch (error: any) {
      const status = error.message === 'Match not found' ? 404 : 500;
      res.status(status).json({
        success: false,
        error: error.message || 'Failed to fetch match',
      });
    }
  },

  async getMatchPlayers(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const players = await matchService.getMatchPlayers(id);

      res.status(200).json({
        success: true,
        data: players,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to fetch players',
      });
    }
  },
};
