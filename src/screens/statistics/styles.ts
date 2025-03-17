import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["green-light"]};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    font-family: ${theme.font.bold};
    color: ${theme.colors["green-dark"]};
  `}
`;

export const ContentStatistics = styled.View`
  flex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;
