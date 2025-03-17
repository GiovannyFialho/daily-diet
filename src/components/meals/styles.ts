import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    font-family: ${theme.font.regular};
    color: ${theme.colors["gray-100"]};
  `}
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors["gray-200"]};
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    font-family: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`;
