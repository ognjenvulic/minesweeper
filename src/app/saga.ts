import { all } from 'redux-saga/effects';
import updateBoard from '../features/gameBoard/saga';
//import { todoSaga } from '../features/todo/todoSlice';

function* helloSaga(): Generator<void, void, unknown> {
  yield console.log('Hello Sagas!');
}

export default function* rootSaga() {
  yield all([helloSaga(), updateBoard()]);
}