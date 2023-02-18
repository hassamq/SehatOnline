import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useFonts } from "expo-font";
import Navigation from "./Navigation";

import fonts from "./config/font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./Navigation";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    <SafeAreaProvider>
      <StackNavigator />
    </SafeAreaProvider>
  );
}
