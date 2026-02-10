import { PrismaClient } from '@prisma/client';
import { auth } from '../config/firebase.config';

const prisma = new PrismaClient();

export const authService = {
  async loginWithGoogle(idToken: string) {
    try {
      // Verify the Firebase ID token
      const decodedToken = await auth.verifyIdToken(idToken);
      const { uid, email, name, picture } = decodedToken;

      if (!email) {
        throw new Error('Email not found in token');
      }

      // Find or create user
      let user = await prisma.user.findUnique({
        where: { googleId: uid },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            googleId: uid,
            email,
            name: name || email.split('@')[0],
            avatar: picture,
            cashBalance: 100, // Welcome bonus
            bonusBalance: 50,
          },
        });
      }

      return {
        user,
        token: idToken,
      };
    } catch (error) {
      throw error;
    }
  },

  async getCurrentUser(uid: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { googleId: uid },
      });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      throw error;
    }
  },
};
