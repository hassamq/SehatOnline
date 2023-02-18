import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Colors from "../Constants/colors";

import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import MainHome from "../screens/Home/Home";

import Sidebar from "../components/Sidebar";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
  return (
    <NavigationContainer independent={true} theme={theme}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false, gestureEnabled: true }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function homestack() {
  return (
    <NavigationContainer independent={true} theme={theme}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false, gestureEnabled: true }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const DrawerMenu = ({ navigation, route }) => {
  return (
    <NavigationContainer independent={true} theme={theme}>
      <Drawer.Navigator
        // screenOptions={{
        //   drawerType: "front",
        //   // headerShown: false,
        //   gestureEnabled: true,
        //   drawerLabel: "as",

        //   swipeEdgeWidth: 0,
        //   drawerStyle: {
        //     width: "70%",
        //     borderBottomRightRadius: 12,
        //     borderTopRightRadius: 12,
        //   },
        //   overlayColor: "rgba(0,0,0,.5)",
        // }}
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <Sidebar {...props} />}
      >
        <Drawer.Screen name="HomeDrawer" component={BottomTabNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export const BottomTabNavigation = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Profile") {
            iconName = "account";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color="#fff" />
          );
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: styles.tabBar,
        labelStyle: styles.label,
      })}
    >
      <Tab.Screen name="Home" component={MainHome} />
      <Tab.Screen name="Profile" component={MainHome} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  // tabBar: {
  //   alignSelf: "center",
  //   backgroundColor: Colors.primary,
  //   borderTopWidth: 1,
  //   borderTopColor: "#dcdcdc",
  //   height: 60,
  //   width: "90%",
  //   paddingTop: 5,
  //   borderRadius: 50,
  //   shadowColor: Colors.text,
  //   shadowOffset: {
  //     width: 100,
  //     height: 100,
  //   },
  //   shadowOpacity: 0.8,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },
  // label: {
  //   fontSize: 12,
  //   marginBottom: 5,
  // },
});

export default StackNavigator;
