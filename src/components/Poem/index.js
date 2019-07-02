import React from "react";

import styled from "styled-components";

const Main = styled.h2`
  color: whitesmoke;
`;
export default props => {
  return (
    <Main>
      Rose are {props.color}, violet are {props.color}
    </Main>
  );
};
