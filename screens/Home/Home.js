import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
  TextInput,
} from "react-native";
import React from "react";

import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../../components/Card";
import { LinearGradient } from "expo-linear-gradient";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header} flexDirection="row">
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
      {/* Search */}
      <View style={styles.searchcontainer}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={20} color={Colors.primary} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#b0c1d1"
          />
        </View>
      </View>
      {/* Search End */}

      {/* Banner */}
      <ScrollView>
        <View style={styles.screen}>
          <ImageBackground
            flexDirection="row"
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
            // resizeMode="contain"
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

        <View style={styles.container1}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <Card
                  title={item.title}
                  description={item.description}
                  iconName={item.iconName}
                />
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            maxToRenderPerBatch={3}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const data = [
  {
    id: "1",
    title: "Online Consultation",
    description: "Get consultation from doctors online",
    iconName: "user-md",
  },
  {
    id: "2",
    title: "Home Sampling for Tests",
    description: "Get your samples collected from home",
    iconName: "home",
  },
  {
    id: "3",
    title: "Book Lab Tests",
    description: "Book lab tests at your convenience",
    iconName: "calendar",
  },
  {
    id: "4",
    title: "Medicine Delivery",
    description: "Get your medicines delivered to your doorstep",
    iconName: "medkit",
  },
  {
    id: "5",
    title: "Symptoms Checker",
    description: "Check your symptoms and get recommendations",
    iconName: "stethoscope",
  },
];

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing * 4,
    flex: 1,
    // borderWidth: 1,
  },
  header: {
    pading: Spacing * 1.5,

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
    // resizeMode: "contain",
    marginTop: Spacing,
    padding: Spacing,
    marginRight: Spacing * 2,
  },
  banner: {
    // marginTop: "10%",
    padding: Spacing * 5,

    // resizeMode: "contain",
    borderRadius: Spacing * 2,
    overflow: "hidden",
    // flexDirection: "row,",
  },
  screen: {
    margin: "3%",
    marginTop: Spacing * 5,
  },

  container1: {
    backgroundColor: Colors.onPrimary,
    paddingTop: 20,
    paddingBottom: 20,
  },
  cardContainer: {
    // marginLeft: 10,
    // marginRight: 10,
    width: 200,
    // backgroundColor: "white",
    // borderRadius: 10,
    // elevation: 2,
  },
  searchcontainer: {
    margin: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 30,
    paddingLeft: 15,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    fontSize: 16,
  },
});
