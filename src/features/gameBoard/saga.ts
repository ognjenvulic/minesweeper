import { take, put, delay } from 'redux-saga/effects';
import { send } from '@giantmachines/redux-websocket';
import { setGameBoardValue } from './gameBoardSlice';

export default function* updateBoard() {
  while (true) {
    const { payload } = yield take('REDUX_WEBSOCKET::MESSAGE');

    if (payload?.message?.indexOf('map:') !== -1) {
      let boardState: string[][] = [];
      payload?.message
        .replace('map:', '')
        .split('\n')
        .filter((e: string) => e)
        .forEach((line: string) => {
          boardState.push(line.split(''));
        });
      yield put(setGameBoardValue(boardState));//{ type: 'gameBoard/setGameBoardValue', payload: boardState });
    } else if (payload?.message?.indexOf('new:') !== -1) {
      yield put(send('map'));
    } else if (payload?.message?.indexOf('open:') !== -1) {
      if (payload?.message?.indexOf('You lose') !== -1) {
        yield put(send('map'));
        yield delay(1000);
        yield put(send('new 1'));
      }
      yield put(send('map'));
    }
    console.log(payload?.message);
  }
}
