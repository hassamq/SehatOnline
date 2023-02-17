import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const DoctorCard = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View style={styles.card}>
        {/* <LinearGradient
        colors={["#2596be", "#5db2d6"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      > */}
        <Image style={styles.image} source={{ uri: props.image }} />
        {/* </LinearGradient> */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.specialization}>{props.specialization}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    margin: 10,
    height: 200,
    width: 180,
    flex: 1,
    alignItems: "center",
  },
  //   gradient: {
  //     borderRadius: 10,
  //     overflow: "hidden",
  //     flex: 1,
  //   },
  image: {
    width: 100,
    height: 100,
    alignItems: "center",
    borderRadius: 10,
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#2596be",
  },
  specialization: {
    fontSize: 16,
    color: "#4d4d4d",
    marginTop: 5,
  },
});

export default DoctorCard;
