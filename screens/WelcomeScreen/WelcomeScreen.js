import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
const { height } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{ height: height / 2.5 }}
          resizeMethod="contain"
          source={require("../../assets/images/Welcome.png")}
        />
      </View>

      <View style={styles.vtxt}>
        <Text style={styles.maintxt}>Find The Best Doctors Online</Text>
        <Text style={styles.subtxt}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: Spacing * 2,
          paddingVertical: Spacing * 6,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity style={styles.logincontainer}>
          <Text
            style={styles.loginbtn}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registercontainer}>
          <Text
            style={styles.registerbtn}
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  vtxt: {
    paddingHorizontal: Spacing * 4,
    paddingTop: Spacing * 4,
  },
  maintxt: {
    fontSize: FontSize.xxLarge,
    color: Colors.primary,
    fontFamily: Fonts["poppins-bold"],
    textAlign: "center",
  },
  subtxt: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: Fonts["poppins-regular"],
    textAlign: "center",
    marginTop: Spacing * 4,
  },

  logincontainer: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "48%",
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
  },

  registercontainer: {
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "48%",
    borderRadius: Spacing,
  },

  loginbtn: {
    fontSize: FontSize.Large,
    color: Colors.onPrimary,
    fontFamily: Fonts["poppins-bold"],
    textAlign: "center",
  },
  registerbtn: {
    fontSize: FontSize.Large,
    color: Colors.text,
    fontFamily: Fonts["poppins-bold"],
    textAlign: "center",
  },
});
