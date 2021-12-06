import Container from '@mui/material/Container';
import Header from './features/common/Header/Header';
import { GameBoard } from './features/gameBoard/GameBoard';

function App() {
  return (
    <Container maxWidth={false}>
      <Header/>
      <GameBoard/>
    </Container>
  );
}

export default App;
