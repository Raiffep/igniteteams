import React from "react";

import { Container, Icon, Title } from "./styles";
import { TouchableHighlightProps } from "react-native";

type TGroupCardProps = TouchableHighlightProps & {
  title: string;
};

export const GroupCard = ({ title, ...rest }: TGroupCardProps) => {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
};
