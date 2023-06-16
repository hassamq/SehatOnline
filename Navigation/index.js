import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicon from "react-native-vector-icons/Ionicons";
import ProfileScreen from "../screens/Profile/ProfileScreen";

import Spacing from "../Constants/spacing";
import FontSize from "../Constants/FontSize";
import Colors from "../Constants/colors";
import Fonts from "../Constants/Fonts";

import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import MainHome from "../screens/Home/Home";
import Settings from "../screens/Settings/Settings";
import Appointment from "../screens/Appointment/Appointment";
import Doctors from "../screens/Doctors/Doctors";
import DoctorsDetail from "../screens/Doctors/DoctorsDetail";
import AppointmentScreen from "../screens/Doctors/AppointmentScreen";
import Payment from "../screens/Doctors/Payment"
import SymptomsChecker from "../screens/SymptomsChecker/SymptomsChecker";
import Medicine from "../screens/Medicine Delivery/Medicine";
import MedicinePayment from "../screens/Medicine Delivery/MedicinePayment" ;
import HomeSamplingTests from "../screens/HomeSampling/HomeSampling";
import HomeSamplingPaymentScreen from "../screens/HomeSampling/HomeSamplingPaymentScreen";
import LabTest from "../screens/Lab Tests/LabTest";
import LabTestPayment from "../screens/Lab Tests/LabTestPayment"

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
        initialRouteName="Register"
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
        {/* <Stack.Screen name="Doctors" component={Doctorstack} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Doctorstack() {
  return (
    <NavigationContainer independent={true} theme={theme}>
      <Stack.Navigator
        initialRouteName="Doctors"
        screenOptions={{ headerShown: false, gestureEnabled: true }}
      >
        <Stack.Screen name="MainHome" component={DrawerMenu} />
        <Stack.Screen name="Doctors" component={Doctors} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const DrawerMenu = ({ navigation, route }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.primary,
        drawerActiveTintColor: Colors.onPrimary,
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: FontSize.medium,
          fontFamily: Fonts["poppins-regular"],
        },
      }}
    >
      <Drawer.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{
          title: "Home",
          drawerIcon: ({ color }) => (
            <Ionicon name="home-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Appointment"
        component={Appointment}
        options={{
          title: "Appointment",
          drawerIcon: ({ color }) => (
            <Ionicon name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          drawerIcon: ({ color }) => (
            <Ionicon name="settings-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen name="Doctors" component={Doctors} />
      <Drawer.Screen name="DoctorsDetail" component={DoctorsDetail} />
      <Drawer.Screen name="AppointmentScreen" component={AppointmentScreen}/>
      <Drawer.Screen name="Payment" component={Payment}/>

      <Drawer.Screen name="SymptomsChecker" component={SymptomsChecker}/>

      <Drawer.Screen name="Medicine" component={Medicine}/>
      <Drawer.Screen name="MedicinePayment" component={MedicinePayment}/>

      <Drawer.Screen name="HomeSampling" component={HomeSamplingTests}/>
      <Drawer.Screen name="HomeSamplingPayment" component={HomeSamplingPaymentScreen}/>

      <Drawer.Screen name="LabTest" component={LabTest}/>
      <Drawer.Screen name="LabTestPayment" component={LabTestPayment}/>
    </Drawer.Navigator>
  );
};

export const BottomTabNavigation = ({ navigation, route }) => {
  const activeTintColor = "black";
  const inactiveTintColor = "black";

  return (
    <Tab.Navigator
      initialRouteName="Home1"
      screenOptions={({ route }) => ({
        headerShown: false, // remove header for all screens

        tabBarIcon: ({ focused, color, size }) => {
          let iconImage;
          let iconName;

          if (route.name === "Home1") {
            iconName = "home";
          } else if (route.name === "Profile") {
            iconName = "user";
          } else if (route.name === "1") {
            iconImage = require("../assets/images/icon.png");
          } else if (route.name === "Appointment1") {
            iconName = "book";
          } else if (route.name === "Settings1") {
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
        name="Home1"
        component={MainHome}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "Profile" }}
      />
      <Tab.Screen
        name="1"
        component={MainHome}
        options={{ tabBarLabel: "1" }}
      />
      <Tab.Screen
        name="Appointment1"
        component={Appointment}
        options={{ tabBarLabel: "Appointment" }}
      />
      <Tab.Screen
        name="Settings1"
        component={Settings}
        options={{ tabBarLabel: "" }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default StackNavigator;
