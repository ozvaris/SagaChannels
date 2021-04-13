import * as actionTypes from "../actionTypes";

//FRONT-END ACTIONS
export function startCountDownSecond1(payload) {
  return {
    type: actionTypes.STARTCOUNTDOWNSECOND1,
    payload
  };
}

export function stopCountDownSecond1() {
  return {
    type: actionTypes.STARTCOUNTDOWNSECOND1
  };
}

export function resetCountDownSecond1(payload) {
  return {
    type: actionTypes.RESETCOUNTDOWNSECOND1,
    payload
  };
}

export function setInitCounterSecond1(payload) {
  return {
    type: actionTypes.SETINITCOUNTERSECOND1,
    payload
  };
}

//SAGA ACTIONS
export function updateCountDownSecond1(payload) {
  return {
    type: actionTypes.UPDATECOUNTDOWNSECOND1,
    payload
  };
}
