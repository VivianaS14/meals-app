import { FlatList, ListRenderItemInfo } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CATEGORIES } from "../data/dummy-data";
import { Category as CategoryType } from "../types/Categories";
import { RootStackParamList } from "../types/Navigation";

import Category from "../components/Category";

type Props = NativeStackScreenProps<RootStackParamList, "Categories">;

export default function Categories({ navigation }: Props) {
  const pressHandler = (categoryId: string) => {
    navigation.navigate("Meals", { categoryId });
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }: ListRenderItemInfo<CategoryType>) => (
        <Category item={item} onPress={() => pressHandler(item.id)} />
      )}
      horizontal={false}
      numColumns={2}
    />
  );
}
