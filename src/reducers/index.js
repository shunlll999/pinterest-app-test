import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import board from './board';
import member from './member';

const reducers = combineReducers({
  board,
  member
});

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducers, middleware);

export default store;