import Favorites from "../screens/Favorites";
export type RootStackParamList = {
  Categories: undefined;
  Meals: { categoryId: string };
  Meal: { mealId: string };
  Drawer: undefined;
  Favorites: undefined;
};
