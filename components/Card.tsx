import { StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
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
});
