import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Categories from "./screens/Categories";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Dosis-200": require("./assets/fonts/Dosis-ExtraLight.ttf"),
    "Dosis-400": require("./assets/fonts/Dosis-Regular.ttf"),
    "Dosis-600": require("./assets/fonts/Dosis-SemiBold.ttf"),
    "Dosis-700": require("./assets/fonts/Dosis-Bold.ttf"),
    "Dosis-800": require("./assets/fonts/Dosis-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>MEALS APP 😋</Text>
      <Categories />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },

  title: {
    marginVertical: 15,
    fontFamily: "Dosis-800",
    fontSize: 34,
    textAlign: "center",
    color: "#eee",
  },
});
