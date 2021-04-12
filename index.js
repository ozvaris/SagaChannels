import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware, { delay, eventChannel, END } from "redux-saga";
import { takeLatest, take, put, call } from "redux-saga/effects";
import Output from "./src/output";
import * as actionTypes from "./src/actionTypes";
import reducer from "/src/reducer";
import { saga } from "./src/saga";

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
