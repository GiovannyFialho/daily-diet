import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Content,
  ForwardIcon,
  StatText,
  SubStatText,
} from "@/components/StatsHeader/styles";

type Props = TouchableOpacityProps & {
  statistic: string;
};

export function StatsHeader({ statistic, ...rest }: Props) {
  const value = parseFloat(statistic.replace(",", ".")); // Converte a string para número
  const backgroundColor = value > 50 ? true : false;

  return (
    <Container {...rest}>
      <Content backgroundColor={backgroundColor}>
        <ForwardIcon backgroundColor={backgroundColor} />
        <StatText>{value}%</StatText>
        <SubStatText>das refeições dentro da dieta</SubStatText>
      </Content>
    </Container>
  );
}
