import { takeLatest, take, put, call } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import * as actionTypes from "../actionTypes";
import * as countDownActions from "../actions/countDownActions";

function countdown(secs) {
  return eventChannel((emitter) => {
    const iv = setInterval(() => {
      secs -= 1;
      if (secs > 0) {
        emitter(secs);
      } else {
        // this causes the channel to close
        emitter(END);
      }
    }, 1000);
    // The subscriber must return an unsubscribe function
    return () => {
      clearInterval(iv);
    };
  });
}

const startCountDown = function* (action) {
  const chan = yield call(countdown, action.payload);
  try {
    while (true) {
      // take(END) will cause the saga to terminate by jumping to the finally block
      let seconds = yield take(chan);
      yield put(countDownActions.updateCountDownSecond1(seconds));

      console.log(`countdown: ${seconds}`);
    }
  } finally {
    console.log("countdown terminated");
  }
};

export function* countdownsaga() {
  yield takeLatest(actionTypes.STARTCOUNTDOWNSECOND1, startCountDown);
}
