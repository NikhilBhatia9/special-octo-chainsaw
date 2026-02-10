import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { UserState, UserProfile } from '../../types/user.types';
import api from '../../services/api';

const initialState: UserState = {
  profile: null,
  isLoading: false,
  error: null,
};

export const fetchUserProfile = createAsyncThunk<UserProfile>(
  'user/fetchProfile',
  async () => {
    const response = await api.get('/api/users/profile');
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    updateBalance: (state, action: PayloadAction<{ cash?: number; bonus?: number }>) => {
      if (state.profile) {
        if (action.payload.cash !== undefined) {
          state.profile.cashBalance = action.payload.cash;
        }
        if (action.payload.bonus !== undefined) {
          state.profile.bonusBalance = action.payload.bonus;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<UserProfile>) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch profile';
      });
  },
});

export const { clearError, updateBalance } = userSlice.actions;
export default userSlice.reducer;
