import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Spacing from "../Constants/spacing";
import FontSize from "../Constants/FontSize";
import Colors from "../Constants/colors";
import Fonts from "../Constants/Fonts";

const AppTextInput = ({ ...otherProps }) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      {...otherProps}
      style={[
        {
          fontFamily: Fonts["poppins-regular"],
          fontSize: FontSize.small,
          padding: Spacing * 2,
          backgroundColor: Colors.lightPrimary,
          borderRadius: Spacing,
          marginVertical: Spacing,
        },
        focused && {
          borderWidth: 1,
          borderColor: Colors.primary,

          shadowOffset: { width: 4, height: Spacing },
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
    />
  );
};

export default AppTextInput;
const styles = StyleSheet.create({});
