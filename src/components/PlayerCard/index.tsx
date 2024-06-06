import React from "react";

import { Container, PlayerName, PlayerCardIcon } from "./styles";
import { TPlayer } from "@screens/Players";
import { ButtonIcon } from "..";

export const PlayerCard = ({ name }: TPlayer) => {
  return (
    <Container>
      <PlayerCardIcon name="person" />
      <PlayerName>{name}</PlayerName>
			<ButtonIcon name="close" type="SECONDARY" size={24} />
    </Container>
  );
};
