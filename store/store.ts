// import { applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import { createWrapper } from 'next-redux-wrapper'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer, { RootState } from './root.reducer'
import rootSaga from './root.saga'
import {composeWithDevTools} from "redux-devtools-extension"

import {legacy_createStore as createStore, applyMiddleware, Store} from 'redux';
import {createWrapper, Context} from 'next-redux-wrapper';
import createSagaMiddleware, {Task} from 'redux-saga';
// import reducer, {State} from './reducer';
// import rootSaga from './saga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

// 1.1 create binding to compose
  const bindMiddleware = (middleware:any) => {
    if (process.env.NODE_ENV !== 'production') {
      // const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
  }

  // 2: Add an extra parameter for applying middleware:
  // const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  const store = configureStore({reducer:rootReducer, middleware:([sagaMiddleware]), devTools:process.env.NODE_ENV !== 'production'?true:false});

  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: false});