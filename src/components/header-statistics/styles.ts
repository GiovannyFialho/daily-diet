import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export interface ContainerProps {
  percentageQuantity?: number;
}

export const Container = styled.View<ContainerProps>`
  position: relative;
  min-height: 200px;
  align-items: center;
  justify-content: center;
  ${({ theme, percentageQuantity }) => css`
    background-color: ${percentageQuantity
      ? percentageQuantity > 35
        ? theme.colors["green-light"]
        : theme.colors["red-light"]
      : theme.colors["gray-600"]};
  `}
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Icon = styled(ArrowLeft).attrs<ContainerProps>(
  ({ theme, percentageQuantity }) => ({
    size: 24,
    color: percentageQuantity
      ? percentageQuantity > 35
        ? theme.colors["green-dark"]
        : theme.colors["red-dark"]
      : theme.colors["gray-600"],
  })
)``;

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
