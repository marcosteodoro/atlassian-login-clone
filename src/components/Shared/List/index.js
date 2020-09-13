import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0px;
  align-items: center;
`;

function List(props) {
  return <StyledList>{props.children}</StyledList>;
}

export default List;
