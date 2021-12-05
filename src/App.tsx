import React from 'react';
import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
import { GameBoard } from './features/gameBoard/GameBoard';
import { AppBar, Typography, Toolbar, Link } from '@mui/material';

function App() {
  return (
    <Container maxWidth='md'>
      <AppBar position='static'>
        <Toolbar sx={{ justifyContent: 'space-between'}}>
          <Typography variant='h6' color='inherit' component='div'>
            Minesweeper
          </Typography>
          <Typography variant='h6' color='inherit' component='div'>
            <Link
              sx={{ flexGrow: 1 }}
              href='https://github.com/ognjenvulic/minesweeper'
              color='white'
              underline='hover'
            >
              GitHub
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <GameBoard></GameBoard>
    </Container>
  );
}

export default App;
