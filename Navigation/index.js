import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Colors from "../Constants/colors";

import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import MainHome from "../screens/Home/Home";

import CustomDrawer from "../components/CustomDrawer";

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
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="DrawerMenu"
          component={DrawerMenu}
          options={{ gestureEnabled: false }}
        />
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
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen
          name="Home"
          component={BottomTabNavigation}
          label="Home"
        />

        <Drawer.Screen name="Profile" component={MainHome} label="Profile" />

        <Drawer.Screen
          name="Appointment"
          component={MainHome}
          label="Appointment"
        />
        <Drawer.Screen name="Settings" component={MainHome} label="Settings" />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export const BottomTabNavigation = ({ navigation, route }) => {
  const activeTintColor = "black";
  const inactiveTintColor = "black";

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false, // remove header for all screens

        tabBarIcon: ({ focused, color, size }) => {
          let iconImage;
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Profile") {
            iconName = "user";
          } else if (route.name === "1") {
            iconImage = require("../assets/images/icon.png");
          } else if (route.name === "Appointment") {
            iconName = "book";
          } else if (route.name === "Settings") {
            iconName = "gear";
          }

          if (iconName) {
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (iconImage) {
            return (
              <Image
                source={iconImage}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  padding: 5,
                  marginTop: -30,
                }}
              />
            );
          } else {
            return null;
          }
        },
        tabBarActiveTintColor: activeTintColor,
        tabBarInactiveTintColor: inactiveTintColor,
        tabBarStyle: {
          backgroundColor: "#ededed",
          borderTopWidth: 0,
          height: 60,
          margin: 10,
          marginHorizontal: 35,
          padding: 10,
          borderRadius: 30,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        tabBarLabelStyle: {
          display: "none",
        },
        tabBarIconStyle: {
          marginBottom: -10,
        },
        shadowStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={MainHome}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Profile"
        component={MainHome}
        options={{ tabBarLabel: "Profile" }}
      />
      <Tab.Screen
        name="1"
        component={MainHome}
        options={{ tabBarLabel: "1" }}
      />
      <Tab.Screen
        name="Appointment"
        component={MainHome}
        options={{ tabBarLabel: "Appointment" }}
      />
      <Tab.Screen
        name="Settings"
        component={MainHome}
        options={{ tabBarLabel: "" }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default StackNavigator;
