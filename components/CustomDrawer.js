import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

import MainHome from "../screens/Home/Home";
import FontSize from "../Constants/FontSize";
import Colors from "../Constants/colors";
import Fonts from "../Constants/Fonts";
import Ionicon from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Navigate to the screen named "Login"
    navigation.navigate("Welcome");
  };

  return (
    <>
      <View>
        <ImageBackground
          source={require("../assets/images/background.jpg")}
          style={{ width: undefined, padding: 16, paddingTop: 48 }}
        >
          <View style={{ alignItems: "flex-start" }}>
            <Image
              source={require("../assets/images/profile.jpg")}
              style={{
                height: 90,
                width: 90,
                borderRadius: 45,
                marginBottom: 10,
                borderColor: "white",
                borderWidth: 3,
              }}
            />

            <Text style={styles.Bigtitle}>Jane</Text>
          </View>
        </ImageBackground>
      </View>

      <DrawerContentScrollView {...props}>
        <View style={styles.drawerItemList}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("BottomTabNavigation",
              
              {screen:"Home1"}
              );
            }}
            style={{ paddingVertical: 15 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicon name="home-outline" size={24} />
              <Text style={styles.smalltitle}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Appointment");
            }}
            style={{ paddingVertical: 15 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicon name="timer-outline" size={24} />
              <Text style={styles.smalltitle}>Appointment</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Doctors");
            }}
            style={{ paddingVertical: 15 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicon name="search-outline" size={24} />
              <Text style={styles.smalltitle}>Doctors</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Settings");
            }}
            style={{ paddingVertical: 15 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicon name="settings-outline" size={24} />
              <Text style={styles.smalltitle}>Settings</Text>
            </View>
          </TouchableOpacity>

          {/* <DrawerItemList {...props} /> */}
        </View>
      </DrawerContentScrollView>

      <View style={{ padding: 20, borderTopColor: "#ccc", borderTopWidth: 1 }}>
        <TouchableOpacity
          onPress={handleLogout}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicon name="exit-outline" size={24} />
            <Text style={styles.smalltitle}>Logout</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicon name="alert-circle-outline" size={24} />
            <Text style={styles.smalltitle}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Bigtitle: {
    fontFamily: Fonts["poppins-semiBold"],
    fontSize: FontSize.large,
    color: Colors.onPrimary,
    marginLeft: 15,
  },
  drawerItemList: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingHorizontal: "5%",
  },
  smalltitle: {
    fontFamily: Fonts["poppins-regular"],
    fontSize: FontSize.small,
    color: Colors.text,
    marginLeft: 5,
  },
});

export default CustomDrawer;
