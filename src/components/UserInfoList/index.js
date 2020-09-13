import React from "react";
import Button from "../Shared/Button";
import List from "../Shared/List";

function SocialLoginList() {
  return (
    <List>
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
    </List>
  );
}

export default SocialLoginList;
