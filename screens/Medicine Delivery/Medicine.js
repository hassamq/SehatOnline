import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../components/Header";
import AppTextInput from "../../components/AppTextInput";
import Spacing from "../../Constants/spacing";
import Colors from "../../Constants/colors";
import FontSize from "../../Constants/FontSize";
import Fonts from "../../Constants/Fonts";

const Medicine = () => {
  const title = "Medicine Delivery";
  const previosScreen = null;

  const [medicineName, setMedicineName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleOrder = () => {
    if (medicineName.trim() === '') {
      Alert.alert('Error', 'Please enter the medicine name.');
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

    // Place the order and perform necessary actions (e.g., API calls)
    // You can implement the logic to send the order details to the server here
    console.log('Medicine Name:', medicineName);
    console.log('Phone Number:', phoneNumber);
    console.log('Address:', address);
    Alert.alert('Order Placed', 'Our Team will contact you regarding your deliver as soon as possible', [
        {
          text: 'Ok',
          onPress: () => console.log('ok pressed'),
        }])
  };

  return (
    <View>
      <Header data={title} pre={previosScreen} />
      <View style={{ paddingBottom: 300 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
          <View>
            <AppTextInput
              placeholder="Medicine Name"
              value={medicineName}
              onChangeText={setMedicineName}
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
              style={styles.signinbtn}
              onPress={handleOrder}
            >
              <Text style={styles.signinText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Medicine;

const styles = StyleSheet.create({
  signinbtn: {
    padding: Spacing ,
    backgroundColor: Colors.primary,
    marginVertical: Spacing * 2,
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    marginTop: 30,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
  },
  signinText: {
    
    fontFamily: Fonts["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.large,
  },
});
