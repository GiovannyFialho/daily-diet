import { View } from "react-native";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  quantity: number;
};

export const Container = styled(View)<ContainerProps>`
  flex: 1;
  padding-top: 30px;
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
