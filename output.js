import React from "react";
import { connect } from "react-redux";
import { doOne, doTwo } from "./actions";

let ONE = 0;
let TWO = 0;

const Output = (props) => {
  return (
    <div>
      <button type="button" onClick={() => props.doOne("a" + ONE++)}>
        redux-saga
      </button>
      <button type="button" onClick={() => props.doTwo("b" + TWO++)}>
        redux
      </button>
      <div>ONE: {props.one}</div>
      <div>TWO: {props.two}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    one: state.one,
    two: state.two
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doOne: (payload) => dispatch(doOne(payload)),
    doTwo: (payload) => dispatch(doTwo(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Output);
