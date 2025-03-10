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
  return (
    <Container percentageQuantity={quantity}>
      <Icon percentageQuantity={quantity} />

      <Title>{quantity}%</Title>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}
