import React from "react";

import { Container, TFilterStyleProps, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type TFilterProps = TouchableOpacityProps &
  TFilterStyleProps & {
    title: string;
  };

export const Filter = ({ title, isActive = false, ...rest }: TFilterProps) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
