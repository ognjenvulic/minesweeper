import React from 'react';
import { Box } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { send } from '@giantmachines/redux-websocket';
import { selectGameBoardState, selectGameBoardLevel, setGameLevel, setGameBoardStatus } from './gameBoardSlice';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import GameStatus from './GameStatus';
import { GameFieldMemoized } from "./GameField";

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
              {el.map((fl, indexY) => (
                <GameFieldMemoized
                  key={indexY}
                  value={fl}
                  onClick={() => {
                    dispatch(setGameBoardStatus("loading"));
                    dispatch(send(`open ${indexY} ${indexX}`));
                  }}
                />
              ))}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
