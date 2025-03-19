import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  quantity: number;
};

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, quantity }) =>
    quantity > 35 ? theme.colors["green-light"] : theme.colors["red-light"]};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    font-family: ${theme.font.bold};
    color: ${theme.colors["green-dark"]};
  `}
`;
