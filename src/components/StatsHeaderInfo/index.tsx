import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Content,
  ForwardIcon,
  StatText,
  SubStatText,
} from "@/components/StatsHeaderInfo/styles";

type Props = TouchableOpacityProps & {
  statistic: string;
};

export function StatsHeaderInfo({ statistic, ...rest }: Props) {
  const value = parseFloat(statistic.replace(",", ".")); // Converte a string para número
  const isOnDiet = value > 50 ? true : false;

  return (
    <Container {...rest} isOnDiet={isOnDiet}>
      <Content isOnDiet={isOnDiet}>
        <ForwardIcon isOnDiet={isOnDiet} />
        <StatText>{value}%</StatText>
        <SubStatText>das refeições dentro da dieta</SubStatText>
      </Content>
    </Container>
  );
}
