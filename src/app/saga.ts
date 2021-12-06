import { all } from 'redux-saga/effects';
import minesweeperWebSocket from '../features/gameBoard/saga';

export default function* rootSaga() {
  yield all([minesweeperWebSocket()]);
}