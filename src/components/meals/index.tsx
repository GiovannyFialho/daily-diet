import { Plus } from "phosphor-react-native";

import {
  Button,
  ButtonText,
  Container,
  Title,
} from "@/components/meals/styles";
import { useTheme } from "styled-components/native";

export function Meals() {
  const { colors } = useTheme();

  return (
    <Container>
      <Title>Refeições</Title>

      <Button>
        <Plus size={18} color={colors.white} />
        <ButtonText>Nova refeição</ButtonText>
      </Button>
    </Container>
  );
}
