import { FlatList, StyleSheet, View, ListRenderItemInfo } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import { RootStackParamList } from "../types/Navigation";
import { Meal as MealType } from "../types/Meals";

import MealItem from "../components/MealOverview";
import { useLayoutEffect } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "Meals">;

export default function MealsOverview({ route, navigation }: Props) {
  const categoryId = route.params.categoryId;

  const displayMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: ListRenderItemInfo<MealType>) => (
          <MealItem item={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
