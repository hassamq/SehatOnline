import React from "react";
import { View, Text, ImageBackground } from "react-native";

const Sidebar = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={{ width: undefined, padding: 16, paddingTop: 48 }}
      ></ImageBackground>
    </View>
  );
};

export default Sidebar;
