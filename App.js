import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useFonts } from "expo-font";
import Navigation from "./Navigation/index";

import fonts from "./config/font";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
