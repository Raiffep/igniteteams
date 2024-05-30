import React from "react";
import { View } from "react-native";

import { Container, Message } from "./styles";

type TListEmptyProps = {
  message: string;
};

export const ListEmpty = ({ message }: TListEmptyProps) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};
