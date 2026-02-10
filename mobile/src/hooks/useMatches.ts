import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchMatches, fetchMatchDetails, setSelectedMatch } from '../redux/slices/matchSlice';

export const useMatches = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { matches, selectedMatch, players, isLoading, error } = useSelector(
    (state: RootState) => state.match
  );

  const loadMatches = async () => {
    try {
      await dispatch(fetchMatches()).unwrap();
    } catch (error) {
      console.error('Failed to load matches:', error);
    }
  };

  const loadMatchDetails = async (matchId: string) => {
    try {
      await dispatch(fetchMatchDetails(matchId)).unwrap();
    } catch (error) {
      console.error('Failed to load match details:', error);
    }
  };

  const selectMatch = (matchId: string | null) => {
    const match = matchId ? matches.find(m => m.id === matchId) : null;
    dispatch(setSelectedMatch(match || null));
  };

  useEffect(() => {
    if (matches.length === 0) {
      loadMatches();
    }
  }, []);

  return {
    matches,
    selectedMatch,
    players,
    isLoading,
    error,
    loadMatches,
    loadMatchDetails,
    selectMatch,
  };
};
