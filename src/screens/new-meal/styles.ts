import { View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(View)`
  flex: 1;
`;

export const HeaderPage = styled.View`
  position: relative;
  min-height: 150px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors["gray-500"]};
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  left: 25px;
`;

export const HeaderPageTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    font-family: ${theme.font.bold};
    color: ${theme.colors["gray-100"]};
  `}
`;

export const ContainerForm = styled.View`
  width: 100%;
  flex: 1;
  margin-top: -10px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;
