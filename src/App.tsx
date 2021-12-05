import React from 'react';
import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
import { GameBoard } from './features/gameBoard/GameBoard';

function App() {
  return (
    <Container maxWidth="md">
      <GameBoard></GameBoard>
    </Container>
  );
}

export default App;
