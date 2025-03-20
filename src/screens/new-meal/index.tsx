import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";

import {
  Container,
  ContainerForm,
  HeaderPage,
  HeaderPageTitle,
  IconContainer,
} from "@/screens/new-meal/styles";

export function NewMeal() {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderPage>
        <IconContainer onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} />
        </IconContainer>
        <HeaderPageTitle>Nova refeição</HeaderPageTitle>
      </HeaderPage>

      <ContainerForm></ContainerForm>
    </Container>
  );
}
