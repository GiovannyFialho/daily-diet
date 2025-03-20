import { FlatList } from "react-native";

import { MealItem, type MealItemProps } from "@/components/meal-item";

import { ContainerList, Spacer, Title } from "@/components/meals/styles";

export interface MealsProps {
  date: string;
  items: MealItemProps[];
}

export function Meals({ date, items }: MealsProps) {
  return (
    <ContainerList>
      <Title>{date}</Title>

      <FlatList
        data={items}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Spacer />}
        nestedScrollEnabled={true}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => (
          <MealItem
            time={item.time}
            name={item.name}
            status={{ type: item.status.type }}
          />
        )}
      />
    </ContainerList>
  );
}
