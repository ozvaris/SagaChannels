import * as actionTypes from "../actionTypes";

export function doOne(payload) {
  return {
    type: actionTypes.ACTION1,
    payload
  };
}

export function doTwo(payload) {
  return {
    type: actionTypes.ACTION2,
    payload
  };
}
