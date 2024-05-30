import React from "react";

import { Container, Content, Icon } from "./styles";
import { Header, Highlight, Input, Button } from "@components/index";
import { newGroupStrings } from "./strings";

export const NewGroup = () => {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title={newGroupStrings.highlightTitle}
          subtitle={newGroupStrings.highlightSubtitle}
        />
        <Input placeholder={newGroupStrings.inputPlaceholder} />
        <Button title={newGroupStrings.buttonTitle} marginTop={20} />
      </Content>
    </Container>
  );
};
