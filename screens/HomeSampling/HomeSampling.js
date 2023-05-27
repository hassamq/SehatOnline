import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../components/Header";
import AppTextInput from "../../components/AppTextInput";
import Spacing from "../../Constants/spacing";
import Colors from "../../Constants/colors";
import FontSize from "../../Constants/FontSize";
import Fonts from "../../Constants/Fonts";

const HomeSamplingTests = () => {
  const title = "Home Sampling Tests";
  const previosScreen = null;

  const [testName, setTestName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleBooking = () => {
    if (testName.trim() === '') {
      Alert.alert('Error', 'Please enter the test name.');
      return;
    }
    if (phoneNumber.trim() === '') {
      Alert.alert('Error', 'Please enter your phone number.');
      return;
    }
    if (address.trim() === '') {
      Alert.alert('Error', 'Please enter your address.');
      return;
    }

    // Book the home sampling test and perform necessary actions (e.g., API calls)
    // You can implement the logic to send the booking details to the server here
    console.log('Test Name:', testName);
    console.log('Phone Number:', phoneNumber);
    console.log('Address:', address);
  };

  return (
    <View>
      <Header data={title} pre={previosScreen} />
      <View style={{ paddingBottom: 300 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
          <View>
            <AppTextInput
              placeholder="Test Name"
              value={testName}
              onChangeText={setTestName}
            />
            <AppTextInput
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
            <AppTextInput
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
              multiline
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleBooking}
            >
              <Text style={styles.buttonText}>Book Home Sampling Test</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeSamplingTests;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: Spacing * 2,
    borderRadius: Spacing,
  },
  buttonText: {
    fontFamily: Fonts["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.large,
  },
});
