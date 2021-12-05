import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface GameBoardState {
  value: number[][];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: GameBoardState = {
  value: [[]],
  status: 'idle',
};

export const gameBoardSlice = createSlice({
  name: 'gameBoard',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setGameBoardValue: (state, action: PayloadAction<number[][]>) => {
      state.value = action.payload;
    },
  },
});

export const { setGameBoardValue } = gameBoardSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectGameBoardState = (state: RootState) => state.gameBoardSlice.value;

export default gameBoardSlice.reducer;
