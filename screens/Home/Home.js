import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";

import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/profile.jpg")}
            style={styles.Image}
          />
        </View>

        <View style={styles.title}>
          <Text style={styles.Bigtitle}>Hi,Jane</Text>
          <Text style={styles.Smalltitle}>Jan 10,2023</Text>
        </View>
        <View>
          <Image
            source={require("../../assets/images/Notification.png")}
            style={styles.bell}
          />
        </View>
      </View>
      {/* Header end */}

      {/* Banner */}

      <View style={styles.screen}>
        <ImageBackground
          style={styles.banner}
          source={require("../../assets/images/background.jpg")}
        >
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: Fonts["poppins-bold"],
                FontSize: FontSize.xxLarge,
                color: Colors.onPrimary,
                // marginTop: -20,
              }}
            >
              Consult Online{" "}
            </Text>
            <Text
              style={{
                fontFamily: Fonts["poppins-regular"],
                FontSize: FontSize.large,
                color: Colors.onPrimary,
              }}
            >
              {" "}
              With Top Specialists
            </Text>
            <Text
              style={{
                fontFamily: Fonts["poppins-regular"],
                FontSize: FontSize.large,
                color: Colors.onPrimary,
                opacity: 0.6,
              }}
            >
              (Anytime,Anywhere)
            </Text>
          </View>
        </ImageBackground>
        <Image
          source={require("../../assets/images/modal.png")}
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 10,
            right: 0,
            height: "130%",
            width: "40%",
            // transform: [{ rotateY: "180deg" }],
          }}
          resizeMode="contain"
        />
      </View>
      <View style={{ marginHorizontal: "6%", marginTop: Spacing }}>
        <Text
          style={{
            fontFamily: Fonts["poppins-bold"],
            FontSize: FontSize.xxLarge,
          }}
        >
          Explore More
        </Text>
      </View>
      {/* Banner End */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  header: {
    pading: Spacing * 1.5,
    flexDirection: "row",
    marginLeft: Spacing,
  },
  imageContainer: {
    height: Spacing * 5,
    width: Spacing * 5,
    borderRadius: Spacing * 2.5,
    overflow: "hidden",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  title: {
    paddingHorizontal: Spacing,
    flex: 1,
    alignContent: "center",
    paddingHorizontal: Spacing,
  },
  Bigtitle: {
    fontFamily: Fonts["poppins-semiBold"],
    fontSize: FontSize.medium,
  },
  Smalltitle: {
    fontFamily: Fonts["poppins-regular"],
    fontSize: FontSize.small,
    opacity: 0.6,
  },
  bell: {
    height: Spacing * 3,
    width: Spacing * 3,
    resizeMode: "contain",
    marginTop: Spacing,
    padding: Spacing,
    marginRight: Spacing * 2,
  },
  banner: {
    // marginTop: "10%",
    padding: Spacing * 5,

    resizeMode: "contain",
    borderRadius: Spacing * 2,
    overflow: "hidden",
    flexDirection: "row,",
  },
  screen: {
    margin: "3%",
    marginTop: Spacing * 3,
  },
});
