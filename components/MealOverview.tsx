import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Meal } from "../types/Meals";
import Badge from "./Badge";
import Card from "./Card";

interface Props {
  item: Meal;
  onPress: () => void;
}

export default function MealOverview({ item, onPress }: Props) {
  return (
    <Card>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <Text style={styles.title}>{item.title}</Text>
        <View>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Duration: </Text>
          <Text style={[styles.description, { fontFamily: "Dosis-600" }]}>
            {item.duration} min
          </Text>
        </View>

        <View style={styles.overviewContainer}>
          <Badge name="Complexity" value={item.complexity} />
          <Badge name="Affordability" value={item.affordability} />
        </View>
      </Pressable>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Dosis-700",
    fontSize: 24,
    textAlign: "center",
    padding: 10,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },

  description: {
    fontFamily: "Dosis-400",
    fontSize: 16,
  },

  overviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  button: {
    flex: 1,
    padding: 16,
  },

  buttonPressed: {
    opacity: 0.5,
    backgroundColor: "#ccc",
  },
});
