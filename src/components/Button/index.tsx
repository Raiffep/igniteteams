import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title, TButtonTypeStyleProps } from "./styles";

type TButtonProps = TouchableOpacityProps & {
  title: string;
  marginTop?: number;
  type?: TButtonTypeStyleProps;
};

export const Button = ({ title, type = 'PRIMARY', marginTop, ...rest }: TButtonProps) => {
  return (
    <Container type={type} marginTop={marginTop} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
