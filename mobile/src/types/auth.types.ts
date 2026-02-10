export interface User {
  id: string;
  googleId: string;
  email: string;
  name: string;
  avatar?: string;
  cashBalance: number;
  bonusBalance: number;
  level: number;
  xp: number;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  idToken: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
