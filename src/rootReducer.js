import { combineReducers } from "redux";
import reducer from "./reducers/reducer";
import countDownReducer from "./reducers/countDownReducer";

export default combineReducers({
  reducer: reducer,
  countDownReducer: countDownReducer
});
