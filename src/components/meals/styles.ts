import styled, { css } from "styled-components/native";

export const ContainerList = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    font-family: ${theme.font.bold};
    color: ${theme.colors["gray-100"]};
    margin-bottom: 15px;
  `}
`;

export const Spacer = styled.View`
  height: 12px;
`;
