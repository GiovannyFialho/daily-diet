import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors["gray-500"]};
  border-radius: 6px;
`;

export const TimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 12px;
  margin-right: 12px;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors["gray-400"]};
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xs};
    font-family: ${theme.font.regular};
    color: ${theme.colors["gray-100"]};
  `}
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: "tail",
})`
  ${({ theme }) => css`
    flex: 1;
    font-size: ${theme.font.sizes.md};
    font-family: ${theme.font.regular};
    color: ${theme.colors["gray-200"]};
  `}
`;

export type StatusProps = {
  type: boolean;
};

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme, type }) =>
    type ? theme.colors["green-light"] : theme.colors["red-light"]};
`;
