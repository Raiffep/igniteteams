import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300
}))`
  flex: 1;
  padding: 16px;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
