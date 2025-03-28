import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { ButtonCreator } from "@/components/ButtonCreator";
import { LogoHeader } from "@/components/LogoHeader";
import { SectionList } from "@/components/SectionList";
import { StatsHeader } from "@/components/StatsHeader";

import { mealGetAll } from "@/storage/meal/mealGetAll";

import { Container } from "@/screens/Home/styles";

type Item = {
  id: string;
  name: string;
  hour: string;
  date: string;
  description: string;
  inDiet: boolean;
};

type Section = {
  title: string;
  data: Item[];
};

export function Home() {
  const [mealList, setMealList] = useState<Section[]>([]);
  const [result, setResult] = useState("0.00");
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  function handleStatsInfoNavigation() {
    navigation.navigate("homestats");
  }

  function handleMealCreatorNavigation() {
    navigation.navigate("mealcreator");
  }

  async function fetchMeals() {
    try {
      const data = await mealGetAll();
      setMealList(data);
      mealsInDietPercentage();
    } catch (error) {
      console.log(error);
    }
  }

  const mealsInDietPercentage = () => {
    const allItems = mealList.flatMap((section) => section.data);
    const inDietItems = allItems.filter((item) => item.inDiet);
    const totalItems = allItems.length;
    if (totalItems === 0) return "0.0";
    const result = ((inDietItems.length / totalItems) * 100)
      .toFixed(2)
      .toString();
    return result;
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  useEffect(() => {
    const percentage = mealsInDietPercentage();
    setResult(percentage);
  }, [mealList]);

  useEffect(() => {
    if (isFocused) {
      fetchMeals();
    }
  }, [isFocused]);

  return (
    <Container>
      <LogoHeader />

      <StatsHeader statistic={result} onPress={handleStatsInfoNavigation} />

      <ButtonCreator onPress={handleMealCreatorNavigation} />
      <SectionList sections={mealList} />
    </Container>
  );
}
