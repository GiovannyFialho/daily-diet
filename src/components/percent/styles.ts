import { ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export interface ContainerProps {
  percentageQuantity?: number;
}

export const Container = styled.View<ContainerProps>`
  position: relative;
  min-height: 102px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  ${({ theme, percentageQuantity }) => css`
    background-color: ${percentageQuantity
      ? percentageQuantity > 35
        ? theme.colors["green-light"]
        : theme.colors["red-light"]
      : theme.colors["gray-600"]};
  `}
`;

export const Icon = styled(ArrowUpRight).attrs<ContainerProps>(
  ({ theme, percentageQuantity }) => ({
    size: 24,
    color: percentageQuantity
      ? percentageQuantity > 35
        ? theme.colors["green-dark"]
        : theme.colors["red-dark"]
      : theme.colors["gray-600"],
  })
)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes["2xl"]};
    font-family: ${theme.font.bold};
    color: ${theme.colors["gray-100"]};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    font-family: ${theme.font.regular};
    color: ${theme.colors["gray-100"]};
  `}
`;
