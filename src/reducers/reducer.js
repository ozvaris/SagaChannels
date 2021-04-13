import * as actionTypes from "../actionTypes";

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
    case actionTypes.COUNTDOWNSECOND1:
      return { ...state, two: action.payload };
  }
};

export default reducer;
