import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Description,
  Icon,
  IconContainer,
  Title,
  type ContainerProps,
} from "@/components/header-statistics/styles";

interface HeaderStatisticsProps extends ContainerProps {
  quantity: number;
}

export function HeaderStatistics({ quantity }: HeaderStatisticsProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container percentageQuantity={quantity}>
      <IconContainer onPress={handleGoBack}>
        <Icon percentageQuantity={quantity} />
      </IconContainer>

      <Title>{quantity}%</Title>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}
