import { render, screen } from "@testing-library/react";
import { GameBoard } from './GameBoard';
import GameField from "./GameField";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe ('Redux connected component.', ()=>{
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      gameBoardSlice: {
        value: [[0,0],[0,0]],
        markedBombs: [],
        level: 1,
        status: 'idle',}
    });

    component = render(
      <Provider store={store}>
        <GameBoard />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.findByRole('button', {text:/Start New Game Level 1/i}));
  });

})

test('game field render', ()=> {
  render(<GameField value='HELLO' />)
  expect(screen.getByText(/HELLO/));
})