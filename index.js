import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware, { delay, eventChannel, END } from "redux-saga";
import { takeLatest, take, put, call } from "redux-saga/effects";
import Output from "./output";

import * as actionTypes from "./actionTypes";
//import { reducer } from "./reducer";

const oneSaga = function* (action) {
  //console.log("oneSaga - ACTION2");
  yield call(delay, 500);
  yield put({ type: actionTypes.ACTION2, payload: action.payload });
};

const saga = function* () {
  //console.log("saga - ACTION1");
  yield takeLatest(actionTypes.ACTION1, oneSaga);
};

const initialState = {
  one: 100,
  two: 100
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.ACTION1:
      return { ...state, one: action.payload };
    case actionTypes.ACTION2:
      return { ...state, two: action.payload };
  }
};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(saga);

const App = () => (
  <Provider store={store}>
    <Output />
  </Provider>
);

render(<App />, document.getElementById("root"));
