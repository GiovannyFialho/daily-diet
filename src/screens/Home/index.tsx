import { FlatList } from "react-native";

import { mealsMock } from "@/mock/meals";

import { Header } from "@/components/header";
import { ListEmpty } from "@/components/list-empty";
import { Meals } from "@/components/meals";
import { MealsSection } from "@/components/meals-section";
import { Percent } from "@/components/percent";

import { Container, ContainerList, Spacer } from "@/screens/home/styles";

export function Home() {
  return (
    <Container>
      <Header />

      <Percent quantity={90.86} />

      <MealsSection />

      <ContainerList>
        <FlatList
          data={mealsMock}
          keyExtractor={(item) => item.date}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <Spacer />}
          nestedScrollEnabled={true}
          renderItem={({ item }) => (
            <Meals date={item.date} items={item.items} />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Nenhuma refeição cadastrada" />
          )}
        />
      </ContainerList>
    </Container>
  );
}
