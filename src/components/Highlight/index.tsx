import React from "react";

import { Container, Title, SubTitle } from "./styles";

type THighlightProps = {
	title: string;
	subtitle: string;
}

export const Highlight = ({ title, subtitle }: THighlightProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};
