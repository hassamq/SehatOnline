import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from "react-native";
import Spacing from "../Constants/spacing";
import FontSize from "../Constants/FontSize";
import Colors from "../Constants/colors";
import Fonts from "../Constants/Fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function Settings(props) {
  const navigation = useNavigation();
  return (
    <View styles={styles.header}>
      <ImageBackground>
        <Image
          source={require("../assets/images/background.jpg")}
          style={styles.Image}
        />
        <Text style={styles.Text}>{props.data}</Text>
        <View
          style={{ flexDirection: "row", position: "absolute", marginTop: 20 }}
        >
          <Icon
            style={{
              marginTop: Spacing * 2,
              padding: Spacing,
              marginRight: Spacing * 2,
            }}
            name="arrow-left"
            size={20}
            color="white"
            onPress={() => {
              if(props.pre===null)
            {
              navigation.goBack();
            }
            else{
              navigation.navigate(props.pre);
            }
            }}
          />

          <Icon
            style={{
              marginTop: Spacing * 2,
              padding: Spacing,
              marginLeft: 280,
            }}
            name="bars"
            size={20}
            color="white"
            onPress={() => navigation.openDrawer()}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Image: {
    borderBottomLeftRadius: 80,
    height: 180,
  },
  Text: {
    fontSize: FontSize.xxLarge,
    fontFamily: Fonts["poppins-bold"],
    color: Colors.onPrimary,
    marginTop: -60,
    marginLeft: 40,
  },
});
