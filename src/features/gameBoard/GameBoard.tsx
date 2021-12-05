import React from 'react';
import { Box, Paper } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { send } from '@giantmachines/redux-websocket';
import { setGameBoardValue, selectGameBoardState } from './gameBoardSlice';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
export function GameBoard() {
  //const [fields,] = useState([[0,0,0],[0,0,0],[0,0,0]]);
  const gameBoardState = useAppSelector(selectGameBoardState);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <ButtonGroup variant='outlined' aria-label='outlined button group'>
          <Button onClick={() => dispatch(send('new 1'))}>Level 1</Button>
          <Button onClick={() => dispatch(send('new 2'))}>Level 2</Button>
          <Button onClick={() => dispatch(send('new 3'))}>Level 3</Button>
          <Button onClick={() => dispatch(send('new 4'))}>Level 4</Button>
        </ButtonGroup>
        <ButtonGroup variant='outlined' aria-label='outlined button group'>
          <Button onClick={() => dispatch(send('map'))}>Refresh</Button>
        </ButtonGroup>
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
                      width: 30,
                      height: 30,
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
