import styled from "styled-components/native";

export const Container = styled.View`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors["gray-200"]};
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
