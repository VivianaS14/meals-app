import { StyleSheet, Text, View } from "react-native";

interface Props {
  name?: string;
  value?: string;
  color?: string;
}

export default function Badge({ name = "", value = "", color }: Props) {
  let badgeColor = color ?? "#fff";

  if (value === "simple") badgeColor = "#F9F871";
  if (value === "challenging") badgeColor = "#FFCE61";
  if (value === "hard") badgeColor = "#FFA178";

  if (value === "affordable") badgeColor = "#b9ffb0";
  if (value === "pricey") badgeColor = "#00C2A8";
  if (value === "luxurious") badgeColor = "#41d95d";

  if (value === "true") badgeColor = "#00e800";
  if (value === "false") badgeColor = "#ff5c5c";

  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description}>{name !== "" ? name + ": " : ""} </Text>
      <Text style={[styles.badge, { backgroundColor: badgeColor }]}>
        {value.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  description: {
    fontFamily: "Dosis-400",
    fontSize: 16,
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
});
