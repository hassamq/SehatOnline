import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Spacing from "../Constants/spacing";
import FontSize from "../Constants/FontSize";
import Colors from "../Constants/colors";
import Fonts from "../Constants/Fonts";

const Card = (props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={props.onPress}
    >
      <View style={styles.iconContainer}>
        <FontAwesome name={props.iconName} size={40} color="white" />
      </View>
      <Text style={styles.title}>{props.title}</Text>
      {/* <Text style={styles.description}>{props.description}</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    margin: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    backgroundColor: Colors.primary,
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontFamily: Fonts["poppins-semiBold"],
    fontSize: FontSize.regular,
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#4d4d4d",
    textAlign: "center",
  },
});

export default Card;
