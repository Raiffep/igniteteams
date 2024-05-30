import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type TButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type TButtonProps = {
  marginTop?: number;
  type: TButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<TButtonProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
	border-radius: 6px;
	align-items: center;
	justify-content: center;
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
