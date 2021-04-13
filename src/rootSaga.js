import { saga } from "./sagas/saga";
import { call, put, takeLatest, all, select, fork } from "redux-saga/effects";
import { countdownsaga } from "./sagas/countDownSaga";

export default function* rootSaga() {
  yield all([fork(countdownsaga), fork(saga)]);
}
