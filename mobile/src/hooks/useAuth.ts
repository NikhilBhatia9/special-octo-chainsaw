import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { loginWithGoogle, logout, getCurrentUser, restoreAuthState } from '../redux/slices/authSlice';
import { authService } from '../services/auth.service';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, token, isAuthenticated, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const handleGoogleLogin = async (idToken: string) => {
    try {
      await dispatch(loginWithGoogle({ idToken })).unwrap();
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error('Logout failed:', error);
      // Still clear local state even if API call fails
      dispatch(logout());
    }
  };

  const refreshUser = async () => {
    try {
      await dispatch(getCurrentUser()).unwrap();
    } catch (error) {
      console.error('Failed to refresh user:', error);
    }
  };

  const restoreAuth = async () => {
    try {
      await dispatch(restoreAuthState()).unwrap();
    } catch (error) {
      console.error('Failed to restore auth state:', error);
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login: handleGoogleLogin,
    logout: handleLogout,
    refreshUser,
    restoreAuth,
  };
};
