import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
interface Props {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  pressIcon?: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  bgColor?: string;
}

export default function IconButton({
  onPress,
  icon,
  color = "#303030",
  size = 12,
  bgColor = "#fff",
  pressIcon,
}: Props) {
  const [isPressed, setIsPressed] = useState(false);

  const pressHandler = () => {
    onPress();
    setIsPressed(!isPressed);
  };

  return (
    <Pressable
      onPress={pressHandler}
      style={({ pressed }) =>
        pressed
          ? [styles.button, styles.pressed]
          : [styles.button, { backgroundColor: bgColor }]
      }
    >
      <Ionicons name={isPressed ? pressIcon : icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 4,
    margin: 2,
    borderWidth: 2,
    borderRadius: 150,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  pressed: {
    opacity: 0.7,
  },
});
