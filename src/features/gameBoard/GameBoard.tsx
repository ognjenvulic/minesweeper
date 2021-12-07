import React from 'react';
import { Box, Paper } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { send } from '@giantmachines/redux-websocket';
import { selectGameBoardState, selectGameBoardLevel, setGameLevel, setGameBoardStatus } from './gameBoardSlice';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import GameStatus from './GameStatus';

export function GameBoard() {
  const gameBoardState = useAppSelector(selectGameBoardState);
  const gameLevel = useAppSelector(selectGameBoardLevel);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Box
        sx={{ display: "flex", flexFlow: "column", alignItems: "center", p: 2 }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          {[1, 2, 3, 4].map((level: number) => (
            <Button
              key={level}
              variant={gameLevel === level ? "contained" : "outlined"}
              onClick={() => {
                dispatch(setGameLevel(level));
              }}
            >{`Level ${level}`}</Button>
          ))}
        </ButtonGroup>

        <Button
          sx={{ m: 1 }}
          variant="outlined"
          onClick={() => {
            dispatch(setGameBoardStatus("loading"));
            dispatch(send(`new ${gameLevel}`));
          }}
        >
          {`Start New Game Level ${gameLevel}`}
        </Button>
        <GameStatus />
      </Box>
      <Box>
        {gameBoardState.map((el, indexX) => {
          return (
            <Box
              key={indexX}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {el.map((fl, indexY) => {
                return (
                  <Paper
                    elevation={5}
                    key={indexY}
                    sx={{
                      m: "1px",
                      width: 25,
                      height: 25,
                      display: "flex",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      dispatch(setGameBoardStatus("loading"));
                      dispatch(send(`open ${indexY} ${indexX}`));
                    }}
                    onContextMenu={(e)=> {
                      e.preventDefault();
                      alert('Marking mines is not supported at the moment (just dont open the one with bombs).')
                    }}
                  >
                    {fl}
                  </Paper>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
