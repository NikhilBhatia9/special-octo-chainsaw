import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.post('/google', authController.loginWithGoogle);

// Protected routes
router.get('/me', authMiddleware, authController.getCurrentUser);

export default router;
