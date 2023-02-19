import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

const Doctors = () => {
  const navigation = useNavigation();
  const title = "Doctors";
  const previosScreen=null;
  return (
    <View>
      <Header data={title} pre={previosScreen} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DoctorsDetail");
        }}
      >
        <Text>Doctors</Text>
      </TouchableOpacity>
    </View>
  );
  // ;
};

export default Doctors;

const styles = StyleSheet.create({});
