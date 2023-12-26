import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types/Navigation";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Badge from "../components/Badge";

type Props = NativeStackScreenProps<RootStackParamList, "Meal">;

export default function Meal({ route }: Props) {
  const mealId = route.params.mealId;

  const {
    title,
    categoryIds,
    complexity,
    affordability,
    duration,
    isGlutenFree,
    isLactoseFree,
    isVegan,
    isVegetarian,
    ingredients,
    steps,
    imageUrl,
  } = MEALS.find((meal) => meal.id === mealId)!;

  const mealCategories = CATEGORIES.filter((category) =>
    categoryIds.includes(category.id)
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.badgeContainer}>
        <View>
          <Badge
            name="Duration"
            value={`${duration} minutes`}
            color="#fe929d"
          />
          <Badge name="Complexity" value={complexity} />
          <Badge name="Affordability" value={affordability} />
          <View style={styles.categoriesContainer}>
            <Text style={[styles.text, { fontSize: 16 }]}>Categories:</Text>
            <View>
              {mealCategories.map((category) => (
                <Badge
                  key={category.id}
                  value={category.title}
                  color={category.color}
                />
              ))}
            </View>
          </View>
        </View>
        <View>
          <Badge name="Gluten Free" value={`${isGlutenFree}`} />
          <Badge name="Lactose Free" value={`${isLactoseFree}`} />
          <Badge name="Vegan" value={`${isVegan}`} />
          <Badge name="Vegetarian" value={`${isVegetarian}`} />
        </View>
      </View>

      <Text style={styles.title}>Ingredients:</Text>
      <View>
        {ingredients.map((ing) => (
          <Text key={ing} style={styles.text}>
            * {ing}
          </Text>
        ))}
      </View>

      <Text style={styles.title}>Steps:</Text>
      <View>
        {steps.map((step, index) => (
          <Text key={index} style={styles.text}>
            <Text style={{ fontFamily: "Dosis-700" }}>{index + 1}.</Text> {step}
          </Text>
        ))}
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>Bon Appetit!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    padding: 16,
    borderColor: "#303030",
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: "hidden",
  },

  title: {
    fontFamily: "Dosis-700",
    fontSize: 24,
    padding: 10,
    textAlign: "center",
  },

  text: {
    fontFamily: "Dosis-400",
    fontSize: 18,
  },

  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
  },

  imageContainer: {
    marginBottom: 50,
    marginTop: 30,
  },

  badgeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  categoriesContainer: {
    marginTop: 10,
  },
});
