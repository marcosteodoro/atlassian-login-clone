import React from "react";
import styled from "styled-components";
import Textfield from "@atlaskit/textfield";

import Button from "../Shared/Button";
import UserActionList from "../UserActionList";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0px auto 12px;
  width: 320px;
`;

const SubtitleContainer = styled.div`
  margin-bottom: 24px;
  font-size: 16px;
`;

const SubtitleText = styled.h5`
  font-weight: 600;
  font-size: 1em;
  color: rgb(94, 108, 132);
  text-align: center;
`;

function Main() {
  return (
    <Container className="main">
      <SubtitleContainer>
        <SubtitleText>Entre na sua conta</SubtitleText>
      </SubtitleContainer>
      <form>
        <div>
          <Textfield
            style={{ fontSize: "16px" }}
            name="basic"
            placeholder="Digitar e-mail"
          />
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: "inherit",
          }}
        >
          <Button appearance="primary" shouldFitContainer>
            Continuar
          </Button>
        </div>
      </form>
      <div
        style={{
          fontSize: "14px",
          fontWeigth: 400,
          textAlign: "center",
          marginTop: "16px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            color: "rgb(151, 160, 175)",
          }}
        >
          OU
        </span>

        <Button
          shouldFitContainer
          margin="16px 0px"
        >
          Continuar com o Google
        </Button>

        <Button
          shouldFitContainer
          margin="0px 0px 16px 0px"
        >
          Continuar com a conta da Microsoft
        </Button>

        <Button
          shouldFitContainer
          margin="0px 0px 16px 0px"
        >
          Continuar com a conta da Apple
        </Button>
      </div>
      <UserActionList />
    </Container>
  );
}

export default Main;
