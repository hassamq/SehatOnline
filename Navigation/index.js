import * as React from "react";
import { View, Text } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "../Constants/colors";

import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import MainHome from "../screens/Home/Home";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true} theme={theme}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false, gestureEnabled: true }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={MainHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
