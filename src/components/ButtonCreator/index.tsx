import { TouchableOpacityProps } from "react-native";

import {
  ButtonText,
  Container,
  Content,
  PlusIcon,
  Text,
} from "@/components/ButtonCreator/styles";

export function ButtonCreator({ onPress, ...rest }: TouchableOpacityProps) {
  return (
    <Container>
      <Text>Refeições</Text>

      <Content onPress={onPress} {...rest}>
        <PlusIcon />
        <ButtonText>Nova refeição</ButtonText>
      </Content>
    </Container>
  );
}
