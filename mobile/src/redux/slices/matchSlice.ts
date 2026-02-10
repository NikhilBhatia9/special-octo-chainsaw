import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { MatchState, Match, Player } from '../../types/match.types';
import { matchService } from '../../services/match.service';

const initialState: MatchState = {
  matches: [],
  selectedMatch: null,
  players: [],
  isLoading: false,
  error: null,
};

export const fetchMatches = createAsyncThunk<Match[]>(
  'match/fetchMatches',
  async () => {
    const response = await matchService.getMatches();
    return response;
  }
);

export const fetchMatchDetails = createAsyncThunk<{ match: Match; players: Player[] }, string>(
  'match/fetchMatchDetails',
  async (matchId) => {
    const match = await matchService.getMatchDetails(matchId);
    const players = await matchService.getMatchPlayers(matchId);
    return { match, players };
  }
);

const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    setSelectedMatch: (state, action: PayloadAction<Match | null>) => {
      state.selectedMatch = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action: PayloadAction<Match[]>) => {
        state.isLoading = false;
        state.matches = action.payload;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch matches';
      })
      .addCase(fetchMatchDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMatchDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedMatch = action.payload.match;
        state.players = action.payload.players;
      })
      .addCase(fetchMatchDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch match details';
      });
  },
});

export const { setSelectedMatch, clearError } = matchSlice.actions;
export default matchSlice.reducer;
