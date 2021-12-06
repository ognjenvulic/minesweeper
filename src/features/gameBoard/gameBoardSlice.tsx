import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type boardStatus = 'idle' | 'loading' | 'win' | 'lose' | 'error';
export interface GameBoardState {
  value: string[][];
  level: number;
  status: boardStatus;
}

const initialState: GameBoardState = {
  value: [],
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
    setGameBoardStatus: (state, action: PayloadAction<boardStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setGameBoardValue, setGameLevel, setGameBoardStatus } = gameBoardSlice.actions;

export const selectGameBoardState = (state: RootState) => state.gameBoardSlice.value;
export const selectGameBoardLevel = (state: RootState) => state.gameBoardSlice.level;
export const selectGameBoardStatus = (state: RootState) => state.gameBoardSlice.status;

export default gameBoardSlice.reducer;
