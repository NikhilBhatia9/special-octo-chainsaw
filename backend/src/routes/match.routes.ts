import { Router } from 'express';
import { matchController } from '../controllers/match.controller';

const router = Router();

router.get('/', matchController.getAllMatches);
router.get('/:id', matchController.getMatchById);
router.get('/:id/players', matchController.getMatchPlayers);

export default router;
