import {
  Container,
  Name,
  Status,
  Time,
  TimeContainer,
  type StatusProps,
} from "@/components/meal-item/styles";

export interface MealItemProps {
  time: string;
  name: string;
  status: StatusProps;
}

export function MealItem({ time, name, status }: MealItemProps) {
  return (
    <Container>
      <TimeContainer>
        <Time>{time}</Time>
      </TimeContainer>

      <Name>{name}</Name>
      <Status type={status.type} />
    </Container>
  );
}
