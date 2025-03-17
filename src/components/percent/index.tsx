import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Description,
  Icon,
  Title,
  type ContainerProps,
} from "@/components/percent/styles";

interface PercentProps extends ContainerProps {
  quantity: number;
}

export function Percent({ quantity, percentageQuantity }: PercentProps) {
  const navigation = useNavigation();

  function handleOpenStatistics() {
    navigation.navigate("statistics");
  }

  return (
    <Container percentageQuantity={quantity} onPress={handleOpenStatistics}>
      <Icon percentageQuantity={quantity} />

      <Title>{quantity}%</Title>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}
