import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type TButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type TButtonProps = {
  marginTop?: number;
  type: TButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<TButtonProps>`
  ${({ marginTop, theme, type }) => css`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    margin-top: ${marginTop ?? 0}px;
    background-color: ${
      type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
