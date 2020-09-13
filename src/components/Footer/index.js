import React from "react";
import { AtlassianLogo } from "@atlaskit/logo";
import styled from "styled-components";

const Container = styled.footer`
  border-top: 1px solid rgb(213, 216, 222);
  color: rgb(107, 119, 140);
  padding: 16px 0px;
  width: 320px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 0px auto;
`;

function Footer() {
  return (
    <Container>
      <div>
        <AtlassianLogo
          size="small"
          className="hide-for-medium"
          iconColor="rgb(94, 108, 132)"
          textColor="rgb(66, 82, 110)"
        />
        <AtlassianLogo
          className="hide-for-small"
          size="medium"
          iconColor="rgb(94, 108, 132)"
          textColor="rgb(66, 82, 110)"
        />
      </div>
      <span style={{ fontSize: "12px" }}>
        Uma conta para Jira, Confluence, Trello e{" "}
        <a href="https://id.atlassian.com/login">mais</a>.
      </span>
    </Container>
  );
}

export default Footer;
