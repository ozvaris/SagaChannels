import { delay, eventChannel, END } from "redux-saga";
import { takeLatest, take, put, call } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";

const oneSaga = function* (action) {
  //console.log("oneSaga - ACTION2");
  yield call(delay, 500);
  yield put({ type: actionTypes.ACTION2, payload: action.payload });
};

export const saga = function* () {
  //console.log("saga - ACTION1");
  yield takeLatest(actionTypes.ACTION1, oneSaga);
};
