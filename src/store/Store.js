import React from "react";

import Constant from "../store/constant";

export const CTX = React.createContext();

const initState = {
  color: "red",
  number: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case Constant.UPDATE_COLOR:
      return { ...state, color: action.payload };
    case Constant.UPDATE_NUMBER:
      return { ...state, number: state.number + 1 };
    default:
      throw Error("reducer error");
  }
};

export default function Store(props) {
  const stateHooks = React.useReducer(reducer, initState);
  return <CTX.Provider value={stateHooks}>{props.children}</CTX.Provider>;
}
