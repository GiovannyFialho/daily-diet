import {
  Container,
  ContainerStats,
  ContentBlock,
  ContentStats,
  StatsDescription,
  StatsValue,
  Title,
} from "@/components/content-statistics/styles";
import { View } from "react-native";

export function ContentStatistics() {
  const withinDiet = 99;
  const outsideDiet = 10;

  return (
    <Container>
      <Title>Estatísticas gerais</Title>

      <View style={{ gap: 12 }}>
        <ContentBlock>
          <StatsValue>22</StatsValue>

          <StatsDescription>
            melhor sequência de pratos dentro da dieta
          </StatsDescription>
        </ContentBlock>

        <ContentBlock>
          <StatsValue>109</StatsValue>

          <StatsDescription>refeições registradas</StatsDescription>
        </ContentBlock>

        <ContainerStats>
          <ContentStats quantity={withinDiet}>
            <StatsValue>99</StatsValue>

            <StatsDescription>refeições dentro da dieta</StatsDescription>
          </ContentStats>

          <ContentStats quantity={outsideDiet}>
            <StatsValue>10</StatsValue>

            <StatsDescription>refeições fora da dieta</StatsDescription>
          </ContentStats>
        </ContainerStats>
      </View>
    </Container>
  );
}
