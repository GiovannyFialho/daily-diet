import styled, { css } from "styled-components/native";

type ContentStatsProps = {
  quantity: number;
};

export const Container = styled.View`
  flex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    font-family: ${theme.font.bold};
    color: ${theme.colors["gray-100"]};
    text-align: center;
    margin: 50px 0 23px;
  `}
`;

export const ContentBlock = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors["gray-600"]};
`;

export const StatsValue = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    font-family: ${theme.font.bold};
    color: ${theme.colors["gray-100"]};
    text-align: center;
  `}
`;

export const StatsDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    font-family: ${theme.font.regular};
    color: ${theme.colors["gray-200"]};
    text-align: center;
  `}
`;

export const ContainerStats = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const ContentStats = styled.View<ContentStatsProps>`
  width: 48%;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme, quantity }) =>
    quantity > 35 ? theme.colors["green-light"] : theme.colors["red-light"]};
`;
