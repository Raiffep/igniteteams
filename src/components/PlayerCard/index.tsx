import React from "react";

import { Container, PlayerName, PlayerCardIcon } from "./styles";
import { ButtonIcon } from "..";
import { TouchableOpacityProps } from "react-native";
import { TPlayer } from "@screens/Players/hooks";

export const PlayerCard = ({
  name,
  ...rest
}: TPlayer & TouchableOpacityProps) => {
  return (
    <Container>
      <PlayerCardIcon name="person" />
      <PlayerName>{name}</PlayerName>
      <ButtonIcon name="close" type="SECONDARY" size={24} {...rest} />
    </Container>
  );
};
