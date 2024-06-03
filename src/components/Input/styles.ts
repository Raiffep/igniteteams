import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300
}))`
  ${({ theme }) => css`
    flex: 1;
    padding: 16px;
    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;
    size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    background-color: ${theme.COLORS.GRAY_700};
  `};
`;
