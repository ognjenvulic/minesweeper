import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface GameBoardState {
  value: string[][];
  level: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: GameBoardState = {
  value: [[]],
  level: 1,
  status: 'idle',
};

export const gameBoardSlice = createSlice({
  name: 'gameBoard',
  initialState,
  reducers: {
    setGameBoardValue: (state, action: PayloadAction<string[][]>) => {
      state.value = action.payload;
    },
    setGameLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
  },
});

export const { setGameBoardValue, setGameLevel } = gameBoardSlice.actions;

export const selectGameBoardState = (state: RootState) => state.gameBoardSlice.value;
export const selectGameBoardLevel = (state: RootState) => state.gameBoardSlice.level;

export default gameBoardSlice.reducer;
