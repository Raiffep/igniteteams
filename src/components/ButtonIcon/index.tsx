import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, Icon, TButtonIconTypeStyleProps } from "./styles";

type TButtonIconProps = TouchableOpacityProps & {
  size: number;
  type: TButtonIconTypeStyleProps;
  name: keyof typeof MaterialIcons.glyphMap;
};

export const ButtonIcon = ({
  size,
  name,
  type,
  ...rest
}: TButtonIconProps) => {
  return (
    <Container {...rest}>
      <Icon size={size} name={name} type={type} />
    </Container>
  );
};
