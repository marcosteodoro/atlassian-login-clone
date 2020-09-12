import React from "react";
import "@atlaskit/css-reset";
import Button from "@atlaskit/button";
import styled from "styled-components";

import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

export default () => {
  return (
    <Container>
      <div>
        <Header />
        <Main />

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
            <Button
              style={{ fontSize: "12px" }}
              appearance="link"
              spacing="compact"
            >
              Política de Privacidade
            </Button>
          </li>
          <li>
            <Button
              style={{ fontSize: "12px" }}
              appearance="link"
              spacing="compact"
            >
              Aviso ao usuário
            </Button>
          </li>
        </ul>
      </div>
      <Footer />
    </Container>
  );
};
