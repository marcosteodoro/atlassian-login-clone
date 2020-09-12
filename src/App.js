import React from "react";
import "@atlaskit/css-reset";
import Button from "@atlaskit/button";

import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
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
    </div>
  );
}

export default App;
