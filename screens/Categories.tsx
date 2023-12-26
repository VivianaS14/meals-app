import { FlatList, ListRenderItemInfo } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import { Category as CategoryType } from "../types/Categories";

import Category from "../components/Category";

function renderCategory({ item }: ListRenderItemInfo<CategoryType>) {
  return <Category item={item} />;
}

export default function Categories() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategory}
      horizontal={false}
      numColumns={2}
    />
  );
}
