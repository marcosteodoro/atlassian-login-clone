import React from "react";
import styled from "styled-components";
import Button from "../Shared/Button";
import List from "../Shared/List";

const Container = styled.div`
  border-top: 1px solid rgb(213, 216, 222);
  margin-top: 16px;
`;

function UserActionList() {
  return (
    <Container>
      <List>
        <li>
          <Button appearance="link">Não consegue entrar?</Button>
        </li>
        <li>
          <Button appearance="link">Criar uma conta</Button>
        </li>
      </List>
    </Container>
  );
}

export default UserActionList;
