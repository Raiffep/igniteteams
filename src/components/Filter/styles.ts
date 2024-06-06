import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type TFilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<TFilterStyleProps>`
  height: 38px;
  width: 70px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `};
`;

export const Title = styled.Text`
  ${({ theme }) =>
    css`
			text-transform: uppercase;
      color: ${theme.COLORS.WHITE};
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;
