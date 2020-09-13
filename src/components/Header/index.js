import React from "react";
import styled from "styled-components";
import { AtlassianLogo } from "@atlaskit/logo";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header() {
  return (
    <StyledHeader className="header">
      <AtlassianLogo
        size="large"
        textColor="rgb(0, 82, 204)"
        iconColor="rgb(38, 132, 255)"
      />
    </StyledHeader>
  );
}

export default Header;
