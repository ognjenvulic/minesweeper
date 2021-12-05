import { take, put } from 'redux-saga/effects'

export default function* updateBoard() {
  while (true) {
    const { payload } = yield take('REDUX_WEBSOCKET::MESSAGE');
    if (payload && payload.message && payload.message.indexOf('map:') !== -1) {
      let boardState:number[][] = [];
      payload?.message.replace('map:','').split('\n').forEach(function (line: any) {
        if(line && line.length){
          console.log(line);
          boardState.push(line.split(''));
        }
      });
      yield put({ type: 'gameBoard/setGameBoardValue', payload: boardState });
    }
    console.log(payload?.message);
  }
}