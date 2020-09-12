import React from "react";
import styled from "styled-components";
import Button from "@atlaskit/button";

const StyledButton = styled(Button)`
  cursor: pointer !important;
  height: 40px !important;
  margin: ${(props) => props.margin ?? ""};
`;

const MyButton = (props) => (
  <StyledButton
    appearance={props.appearance}
    shouldFitContainer={props.shouldFitContainer}
    margin={props.margin}
    spacing={props.spacing}
    style={props.style}
  >
    {props.children}
  </StyledButton>
);

MyButton.defaultProps = {
  appearance: "default",
  shouldFitContainer: true,
  margin: "",
  style: {},
  spacing: null,
};

export default MyButton;
