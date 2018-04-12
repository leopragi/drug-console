import {applyMiddleware,createStore} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './sagas/root';
import rootReducer from './reducers/root'

const sagaMiddleWare = createSagaMiddleWare();
var store = createStore(rootReducer,applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga);

export default store;