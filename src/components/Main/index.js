import React from "react";
import styled from "styled-components";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
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

const StyledButton = styled(Button)`
  cursor: pointer !important;
  height: 40px !important;
  margin: ${(props) => props.margin ?? ""};
`;

StyledButton.defaultProps = {
  margin: "",
};

function Main() {
  return (
    <Container>
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
          <StyledButton appearance="primary" shouldFitContainer>
            Continuar
          </StyledButton>
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

        <StyledButton
          shouldFitContainer
          margin="16px 0px"
        >
          Continuar com o Google
        </StyledButton>

        <StyledButton
          shouldFitContainer
          margin="0px 0px 16px 0px"
        >
          Continuar com a conta da Microsoft
        </StyledButton>

        <StyledButton
          shouldFitContainer
          margin="0px 0px 16px 0px"
        >
          Continuar com a conta da Apple
        </StyledButton>
      </div>
      <div
        style={{
          borderTop: "1px solid rgb(213, 216, 222)",
          marginTop: "16px",
          paddingTop: "16px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyle: "outside none none",
            padding: "0px",
            alignItems: "center",
          }}
        >
          <li>
            <Button appearance="link">Não consegue entrar?</Button>
          </li>
          <li>
            <Button appearance="link">Criar uma conta</Button>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Main;
