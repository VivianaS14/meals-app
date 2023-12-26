import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Meal } from "../types/Meals";

interface Props {
  item: Meal;
}

let complexityColor = "#303030";
let affordabilityColor = "#303030";

export default function MealsOverview({ item }: Props) {
  if (item.complexity === "simple") complexityColor = "#F9F871";
  if (item.complexity === "challenging") complexityColor = "#FFCE61";
  if (item.complexity === "hard") complexityColor = "#FFA178";

  if (item.affordability === "affordable") affordabilityColor = "#b9ffb0";
  if (item.affordability === "pricey") affordabilityColor = "#00C2A8";
  if (item.affordability === "luxurious") affordabilityColor = "#41d95d";

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
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
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Complexity: </Text>
            <Text style={[styles.badge, { backgroundColor: complexityColor }]}>
              {item.complexity.toUpperCase()}
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Affordability: </Text>
            <Text
              style={[styles.badge, { backgroundColor: affordabilityColor }]}
            >
              {item.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderColor: "#303030",
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "#fff",
  },

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

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 1,
    borderRadius: 150,
    borderColor: "#303030",
    backgroundColor: "#303030",
    fontFamily: "Dosis-700",
    fontSize: 16,
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
