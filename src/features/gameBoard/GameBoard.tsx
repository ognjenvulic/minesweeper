import React from 'react';
import { Box, Paper } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { send } from '@giantmachines/redux-websocket';
import { selectGameBoardState } from './gameBoardSlice';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export function GameBoard() {
  const gameBoardState = useAppSelector(selectGameBoardState);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Box sx={{ display: 'flex', flexFlow:'column', alignItems: 'center', p: 2 }}>
        <ButtonGroup variant='outlined' aria-label='outlined button group'>
          <Button variant='contained' onClick={() => dispatch(send('new 1'))}>Level 1</Button>
          <Button onClick={() => dispatch(send('new 2'))}>Level 2</Button>
          <Button onClick={() => dispatch(send('new 3'))}>Level 3</Button>
          <Button onClick={() => dispatch(send('new 4'))}>Level 4</Button>
        </ButtonGroup>
        
        <Button sx={{ m:1 }} variant='outlined' onClick={() => dispatch(send('map'))}>Load</Button>
        
      </Box>
      <Box>
        {gameBoardState.map((el, indexX) => {
          return (
            <Box
              key={indexX}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              {el.map((fl, indexY) => {
                return (
                  <Paper
                    elevation={5}
                    key={indexY}
                    sx={{
                      m: '1px',
                      width: 25,
                      height: 25,
                      display: 'flex',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      console.log(indexX, indexY);
                      dispatch(send(`open ${indexY} ${indexX}`));
                    }}
                  >
                    {gameBoardState[indexX][indexY]}
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
