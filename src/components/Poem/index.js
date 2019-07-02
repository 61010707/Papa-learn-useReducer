import React, { useContext } from "react";

import styled from "styled-components";
import { CTX } from "../../store/Store.js";
import Constant from "../../store/constant";
const Main = styled.h2`
  color: whitesmoke;
`;

const Button = styled.button`
  margin: 5px;
`;
export default () => {
  const [appState, setAppState] = useContext(CTX);

  const handleClick = e => {
    setAppState({ type: Constant.UPDATE_COLOR, payload: e.target.value });
  };

  return (
    <div>
      <Main>
        {" "}
        Rose are {appState.color}, violet are {appState.color} number{" "}
        {appState.number}
      </Main>
      <Button value="Blue" onClick={handleClick}>
        Blue
      </Button>
      <Button value="Green" onClick={handleClick}>
        Green
      </Button>
      <Button value="Red" onClick={handleClick}>
        Red
      </Button>
      <Button
        onClick={() => {
          setAppState({ type: Constant.UPDATE_NUMBER });
        }}
      >
        number +
      </Button>
    </div>
  );
};
