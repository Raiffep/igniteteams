import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { UsersThree } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;