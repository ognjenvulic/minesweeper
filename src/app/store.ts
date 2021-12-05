import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../features/counter/counterSlice';
import gameBoardReducer from '../features/gameBoard/gameBoardSlice';
import reduxWebsocket from '@giantmachines/redux-websocket';
import { connect, send } from '@giantmachines/redux-websocket';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const reduxWebsocketMiddleware = reduxWebsocket({
  serializer: (payload: any): string | ArrayBuffer | ArrayBufferView | Blob => {
    console.log(payload);
    return payload;
  },
  deserializer: (message: any): any => {
    console.log(message);
    return message;
  },
  dateSerializer: (date: any) => date.toISOString(),
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gameBoardSlice: gameBoardReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //thunk: false,
      serializableCheck: false,//Fix for reduxWebsocket
    })
      .prepend(sagaMiddleware)
      .prepend(reduxWebsocketMiddleware),
});

sagaMiddleware.run(rootSaga);

console.log(process.env.WEBSOCKET_ADDR);
store.dispatch(
  connect(process.env.WEBSOCKET_ADDR || "wss://hometask.eg1236.com/game1/")
);
setTimeout(()=>store.dispatch(send('help')), 1000)


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
