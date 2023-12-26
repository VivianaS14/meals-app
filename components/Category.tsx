import { Pressable, StyleSheet, Text, View } from "react-native";

import { Category as CategoryType } from "../types/Categories";

interface Props {
  item: CategoryType;
}

export default function Category({ item }: Props) {
  return (
    <View style={styles.item}>
      <Pressable style={styles.button}>
        <View style={styles.innerContainer}>
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
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    flex: 1,
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
