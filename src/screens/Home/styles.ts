import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 35px;
  background-color: ${({ theme }) => theme.colors["gray-700"]};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    font-family: ${theme.font.bold};
    color: ${theme.colors["green-dark"]};
  `}
`;

export const ContainerList = styled.View`
  flex: 1;
  margin: 30px 0;
`;

export const Spacer = styled.View`
  height: 20px;
`;
