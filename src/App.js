import React from "react";
import styled from "styled-components";
import "@atlaskit/css-reset";
import "./GlobalStyles.css";

import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";
import UserInfoList from "./components/UserInfoList";

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
        <UserInfoList />
      </div>
      <Footer />
    </Container>
  );
};
