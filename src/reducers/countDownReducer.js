import * as actionTypes from "../actionTypes";

const initialState = {
  counterInitSecond1: 50,
  countDownSecond1: 0
};

const countDownReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.STARTCOUNTDOWNSECOND1:
      return { ...state, countDownSecond1: action.payload };
    case actionTypes.STOPCOUNTDOWNSECOND1:
      return { ...state };
    case actionTypes.RESETCOUNTDOWNSECOND1:
      return { ...state, countDownSecond1: action.payload };
    case actionTypes.SETINITCOUNTERSECOND1:
      return { ...state, counterInitSecond1: action.payload };
    case actionTypes.UPDATECOUNTDOWNSECOND1:
      return { ...state, countDownSecond1: action.payload };
  }
};

export default countDownReducer;
