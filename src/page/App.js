import React from "react";

import Poem from "../components/Poem";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin: 25% auto;
  min-height: 200px;
  align-items: center;
`;

const PoemStyled = styled(Poem)``;

const App = () => {
  return (
    <Div>
      <PoemStyled color={"red"} />
    </Div>
  );
};

export default App;
