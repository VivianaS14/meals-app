import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";
import { RootStackParamList } from "./types/Navigation";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();

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
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: { fontFamily: "Dosis-700" },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              title: "Meals Categories",
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsOverview}
            options={{
              title: "Meals Overview",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
