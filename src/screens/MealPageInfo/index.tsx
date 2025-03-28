import { useNavigation } from "@react-navigation/native";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useState } from "react";
import { useTheme } from "styled-components/native";

import { Button } from "@/components/Button";
import { CustomAlert } from "@/components/CustomAlert";
import { DefaultHeader } from "@/components/DefaultHeader";

import { mealRemoveById } from "@/storage/meal/mealDelete";

import {
  BoldText,
  ButtonView,
  Container,
  Content,
  InDietText,
  InDietView,
  StatusFalse,
  StatusTrue,
  Text,
  Title,
  View,
} from "@/screens/MealPageInfo/styles";

export function MealPageInfo({ route }: any) {
  const [alertVisible, setAlertVisible] = useState(false);
  const { COLORS } = useTheme();

  const navigation = useNavigation();

  const { id, name, date, description, hour, inDiet } = route.params ?? {
    name: "",
    hour: "",
    inDiet: false,
  };

  function handleBackNavigation() {
    navigation.navigate("home");
  }

  function handleSubmit(id: string) {
    navigation.navigate("mealeditor", {
      id,
      inDiet,
    });
  }

  const handleConfirm = async () => {
    // Handle the confirm action
    await mealRemoveById(id);
    setAlertVisible(false);
    navigation.navigate("home");
  };

  const handleCancel = () => {
    // Handle the cancel action
    setAlertVisible(false);
  };

  function handleDelete() {
    setAlertVisible(true);
  }

  return (
    <Container>
      <DefaultHeader
        title={"Refeição"}
        onPress={handleBackNavigation}
        style={{
          backgroundColor: inDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT,
        }}
      />

      <Content>
        <View>
          <Title>{name}</Title>
          <Text>{description}</Text>
          <BoldText>Data e hora</BoldText>
          <Text>
            {date} às {hour}
          </Text>

          <InDietView>
            {inDiet ? (
              <>
                <StatusTrue />
              </>
            ) : (
              <StatusFalse />
            )}
            <InDietText>
              {inDiet ? "Dentro da dieta" : "Fora da dieta"}
            </InDietText>
          </InDietView>
        </View>

        <ButtonView>
          <Button
            title={"Editar refeição"}
            onPress={() => handleSubmit(id)}
            icon={<PencilSimpleLine color="white" size={25} />}
          />
          <Button
            type={"SECONDARY"}
            title={"Excluir refeição"}
            onPress={handleDelete}
            icon={<Trash color="black" size={25} />}
          />
        </ButtonView>
      </Content>

      <CustomAlert
        visible={alertVisible}
        title="Deseja realmente excluir o registro da refeição?"
        message=""
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </Container>
  );
}
