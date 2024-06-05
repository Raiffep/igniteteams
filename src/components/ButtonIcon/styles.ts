import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export type TButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type TButtonProps = {
	size: number;
  type: TButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs<TButtonProps>(
  ({ theme, type, size }) => ({
		size,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  })
)``;
