import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../Constants/colors";
import Spacing from "../Constants/spacing";
import FontSize from "../Constants/FontSize";
import Fonts from "../Constants/Fonts";
import Icon from "react-native-vector-icons/FontAwesome";

const Checkbox = ({ label, checked, onPress }) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && (
          <Icon name="check" size={FontSize.large} color={Colors.onPrimary} />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Spacing.small,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: Spacing.medium,
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
  },
  label: {
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-regular"],
  },
});

export default Checkbox;
