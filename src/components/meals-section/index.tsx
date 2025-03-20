import { useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import {
  Button,
  ButtonText,
  Container,
  Title,
} from "@/components/meals-section/styles";

export function MealsSection() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleGoToFooRegistration() {
    navigation.navigate("new-meal");
  }

  return (
    <Container>
      <Title>Refeições</Title>

      <Button onPress={handleGoToFooRegistration}>
        <Plus size={18} color={colors.white} />
        <ButtonText>Nova refeição</ButtonText>
      </Button>
    </Container>
  );
}
