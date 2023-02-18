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

import MainHome from "../screens/Home/Home";
import FontSize from "../Constants/FontSize";
import Colors from "../Constants/colors";
import Fonts from "../Constants/Fonts";
import Ionicon from "react-native-ionicons";
import { FontAwesome } from "@expo/vector-icons";

const CustomDrawer = (props) => {
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
        <DrawerItemList {...props} style={styles.drawerItemList} />
      </DrawerContentScrollView>
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
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
});
export default CustomDrawer;
