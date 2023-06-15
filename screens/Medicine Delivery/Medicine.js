import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import Header from "../../components/Header";
import AppTextInput from "../../components/AppTextInput";
import Spacing from "../../Constants/spacing";
import Colors from "../../Constants/colors";
import FontSize from "../../Constants/FontSize";
import Fonts from "../../Constants/Fonts";

const Medicine = ({navigation}) => {
  const title = "Medicine Delivery";
  const previosScreen = null;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [prescriptionImage, setPrescriptionImage] = useState(null);

  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    if (Constants.platform?.ios) {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission required",
          "Sorry, we need camera roll permissions to upload an image."
        );
      }
    }
  };

  const handleOrder = () => {
    if (phoneNumber.trim() === "") {
      Alert.alert("Error", "Please enter your phone number.");
      return;
    }
    if (address.trim() === "") {
      Alert.alert("Error", "Please enter your address.");
      return;
    }

    // Place the order and perform necessary actions (e.g., API calls)
    // You can implement the logic to send the order details to the server here
    console.log("Phone Number:", phoneNumber);
    console.log("Address:", address);
    console.log("Prescription Image:", prescriptionImage);
   navigation.navigate("MedicinePayment",{prescriptionImage})
  };

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setPrescriptionImage(result.assets[0].uri);
    }
  }
  return (
    <View style={styles.container}>
      <Header data={title} pre={previosScreen} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
            
            <AppTextInput
              editable={false}
              placeholder="Upload Prescription Image"
              value={prescriptionImage ? prescriptionImage : ""}
              style={styles.prescriptionImageInput}
            />
          </TouchableOpacity>

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

          <TouchableOpacity style={styles.placeOrderButton} onPress={handleOrder}>
            <Text style={styles.placeOrderButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Medicine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingBottom: 150,
  },
  formContainer: {
    padding: Spacing,
  },
  
  uploadIcon: {
    width: 20,
    height: 20,
    marginRight: Spacing,
  },
  prescriptionImageInput: {
    flex: 1,
    color: Colors.white,
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-regular"],
  },
  placeOrderButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing,
    borderRadius: Spacing,
    marginTop: Spacing * 2,
  },
  placeOrderButtonText: {
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-bold"],
    color: Colors.white,
    textAlign: "center",
  },
});
