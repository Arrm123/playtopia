import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/gamePage/gameSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});
