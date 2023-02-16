import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            fontSize: FontSize.xxLarge,
            color: Colors.primary,
            fontFamily: Fonts["poppins-bold"],
            textAlign: "left",
          }}
        >
          Hello
        </Text>
      </View>
    </SafeAreaView>
  );
}
