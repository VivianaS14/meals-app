import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

import { Category as CategoryType } from "../types/Categories";

interface Props {
  item: CategoryType;
}

export default function Category({ item }: Props) {
  return (
    <View style={[styles.item, { backgroundColor: item.color }]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: item.color }]}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
    backgroundColor: "#ccc",
  },

  title: {
    fontFamily: "Dosis-700",
    fontSize: 20,
  },
});
