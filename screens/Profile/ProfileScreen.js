import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../components/Header";

const ProfileScreen = () => {
  const title = "Profile";
  const previosScreen = null;
  return (
    <View>
      <Header data={title} pre={previosScreen} />
      <View style={{ paddingBottom: 300 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 150 }}></ScrollView>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
