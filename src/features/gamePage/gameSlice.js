import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount, getGames } from './gameAPI';

const initialState = {
  status: 'idle',
  data: []
};

export const getGameList = createAsyncThunk(
  'game/getGames',
  async () => {
    const response = await getGames();
    return response;
  }
);

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGameList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getGameList.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectGames = (state) => state.game.data;

export default gameSlice.reducer;