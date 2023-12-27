import { useContext } from "react";
import {
  Alert,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { FavoritesContext } from "../store/context/favorites/FavoritesContext";
import MealItem from "../components/MealOverview";

import { MEALS } from "../data/dummy-data";
import { RootStackParamList } from "../types/Navigation";
import { Meal } from "../types/Meals";
import IconButton from "../components/IconButton";

type Props = DrawerScreenProps<RootStackParamList, "Favorites">;

export default function Favorites({ navigation }: Props) {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  const favoritesMeals = MEALS.filter((meal) => favorites.includes(meal.id));

  const onDeleteFavorite = (mealId: string) => {
    Alert.alert("Ops", "Are you sure to delete this meal?", [
      {
        text: "Maybe Not",
        style: "cancel",
        onPress: () => console.log("Cancel"),
      },
      {
        text: "Yeah",
        onPress: () => removeFavorite(mealId),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favoritesMeals}
          renderItem={({ item }: ListRenderItemInfo<Meal>) => (
            <>
              <View style={styles.removeButton}>
                <IconButton
                  icon="close"
                  size={20}
                  bgColor="#d03951"
                  color="#eee"
                  onPress={() => onDeleteFavorite(item.id)}
                />
              </View>
              <MealItem
                item={item}
                onPress={() => navigation.navigate("Meal", { mealId: item.id })}
              />
            </>
          )}
        />
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>No favorites yet.</Text>
          <Text style={styles.text}>Start adding some!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  removeButton: {
    position: "absolute",
    zIndex: 100,
    top: 30,
    right: 30,
  },

  textContainer: {
    marginTop: 50,
  },

  text: {
    fontFamily: "Dosis-700",
    fontSize: 24,
    textAlign: "center",
  },
});
