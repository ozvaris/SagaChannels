import { take, put, call } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";

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

export function* countdownsaga() {
  const chan = yield call(countdown, 50);
  try {
    while (true) {
      // take(END) will cause the saga to terminate by jumping to the finally block
      let seconds = yield take(chan);
      console.log(`countdown: ${seconds}`);
    }
  } finally {
    console.log("countdown terminated");
  }
}
