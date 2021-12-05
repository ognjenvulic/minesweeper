import React, { useState } from 'react';
import { Box, Paper } from "@mui/material";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setGameBoardValue,
  selectGameBoardState
} from './gameBoardSlice';
export function GameBoard() {
  //const [fields,] = useState([[0,0,0],[0,0,0],[0,0,0]]);
  const gameBoardState = useAppSelector(selectGameBoardState);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <button
        onClick={() => dispatch(setGameBoardValue([[0,0,0],[0,0,0],[0,0,0]]))}
      >
       Load Game
      </button>
      <Box>
        {gameBoardState.map((el, index) => {
          return (
            <Box key={index} sx={{ display: "flex" }}>
              {el.map((fl, index) => {
                return (
                  <Paper
                    elevation={5}
                    key={index}
                    sx={{ m: "1px", width: 30, height: 30 }}
                  />
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}