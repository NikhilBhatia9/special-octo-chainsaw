import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { loginWithGoogle, logout, getCurrentUser } from '../redux/slices/authSlice';

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

  const handleLogout = () => {
    dispatch(logout());
  };

  const refreshUser = async () => {
    try {
      await dispatch(getCurrentUser()).unwrap();
    } catch (error) {
      console.error('Failed to refresh user:', error);
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
  };
};
