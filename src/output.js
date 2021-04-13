import React from "react";
import { connect } from "react-redux";
import { doOne, doTwo } from "./actions/actions";
import {
  startCountDownSecond1,
  stopCountDownSecond1,
  resetCountDownSecond1,
  setInitCounterSecond1
} from "./actions/countDownActions";

let ONE = 0;
let TWO = 0;

const Output = (props) => {
  const handleChange = (event) => {
    //alert(event.target.value);
    props.setInitCounterSecond1(event.target.value);
  };

  return (
    <div>
      <button type="button" onClick={() => props.doOne("a" + ONE++)}>
        redux-saga
      </button>
      <button type="button" onClick={() => props.doTwo("b" + TWO++)}>
        redux
      </button>
      <button
        type="button"
        onClick={() => props.startCountDownSecond1(props.counterInitSecond1)}
      >
        startCOUNTDOWN1SECS
      </button>
      <button type="button" onClick={() => props.stopCountDownSecond1()}>
        stopCOUNTDOWN1SECS
      </button>
      <button
        type="button"
        onClick={() => props.resetCountDownSecond1(props.counterInitSecond1)}
      >
        resetCOUNTDOWN1SECS
      </button>
      <div>ONE: {props.one}</div>
      <div>TWO: {props.two}</div>
      <div>
        <label>
          intialCount:
          <input
            type="text"
            name="txtInitialCount"
            value={props.counterInitSecond1}
            //style={"width:50px"}
            onChange={handleChange}
          />
        </label>
        COUNTDOWN1SECS: {props.countDownSecond1}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    one: state.reducer.one,
    two: state.reducer.two,
    countDownSecond1: state.countDownReducer.countDownSecond1,
    counterInitSecond1: state.countDownReducer.counterInitSecond1
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doOne: (payload) => dispatch(doOne(payload)),
    doTwo: (payload) => dispatch(doTwo(payload)),
    startCountDownSecond1: (payload) =>
      dispatch(startCountDownSecond1(payload)),
    stopCountDownSecond1: () => dispatch(stopCountDownSecond1()),
    resetCountDownSecond1: (payload) =>
      dispatch(resetCountDownSecond1(payload)),
    setInitCounterSecond1: (payload) => dispatch(setInitCounterSecond1(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Output);
