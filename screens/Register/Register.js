import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
  
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
import AppTextInput from "../../components/AppTextInput";
import Icon from "react-native-vector-icons/FontAwesome";

import api from "../../api/api"

const Register = ({ navigation }) => {
  const handlePress = () => {
    Keyboard.dismiss();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const validateEmail = (email) => {
    // A basic email validation function
    const emailRegex = /\S+@\S+\.\S+/;
    if (email === "") {
      setEmailError("");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    // A basic password validation function
    if (password === "") {
      setPasswordError("");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword === "") {
      setConfirmPasswordError("");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleImageUpload = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
  
      const pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled) {
        return;
      }
//  const imageUri = pickerResult.assets[0].uri;
      setSelectedImage(pickerResult);
    } catch (error) {
      console.log("Error selecting image:", error);
    }
  };
  
  const Submit_btn = async () => {
    if (email === "" || password === "" || confirmPassword === "" || username === "") {
      alert("Enter all information");
    } else if (!emailError && !passwordError && !confirmPasswordError && selectedImage) {
      // console.log()
      try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("confirmPassword", confirmPassword);
        formData.append("username", username);
        formData.append("image", {
          uri: selectedImage.assets[0].uri,
          name: "image.jpg",
          type: "image/jpeg",
        });
  
        await api.registerUser(formData);
        console.log("Success!");
        // Perform the necessary actions after successful registration
         navigation.navigate("DrawerMenu");
      } catch (error) {
        console.log("Error registering user:", error);
        // Handle the error, e.g., show an error message
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.view1}>
            <View style={styles.view2}>
              <Text style={styles.txt1}>Create account</Text>
              <Text style={styles.txt2}>
                Create an account so you can explore all the features
              </Text>
            </View>

            <View style={{ marginVertical: Spacing * 3 }}>
              <AppTextInput placeholder="Username" onChangeText={(text) => setUsername(text)} />

              <AppTextInput
                placeholder="Email"
                onChangeText={(text) => {
                  setEmail(text);
                  validateEmail(text);
                }}
              />
              <Text style={styles.errorText}>{emailError}</Text>

              <AppTextInput
                placeholder="Password"
                onChangeText={(text) => {
                  setPassword(text);
                  validatePassword(text);
                }}
                secureTextEntry
              />
              <Text style={styles.errorText}>{passwordError}</Text>
              <AppTextInput
                placeholder="Confirm Password"
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  validateConfirmPassword(text);
                }}
                secureTextEntry
              />
              <Text style={styles.errorText}>{confirmPasswordError}</Text>

              <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
                <Text style={styles.uploadButtonText}>Upload Profile Image</Text>
              </TouchableOpacity>

              {selectedImage && (
  <Image source={{ uri: selectedImage.assets[0].uri }} style={styles.uploadedImage} />
)}
            </View>

            {/* Sign up */}
            <TouchableOpacity
              style={{
                padding: Spacing * 2,
                backgroundColor: Colors.primary,
                marginVertical: Spacing * 3,
                borderRadius: Spacing,
                shadowColor: Colors.primary,
                marginTop: -10,
                shadowOffset: {
                  width: 0,
                  height: Spacing,
                },
                shadowOpacity: 0.3,
              }}
            >
              <Text
                style={styles.signinbtn}
                disabled={!!emailError || !!passwordError || !!confirmPasswordError}
                onPress={Submit_btn}
              >
                Sign up
              </Text>
            </TouchableOpacity>

            {/* Sign in */}
            <TouchableOpacity style={{ padding: Spacing * 0.2 }}>
              <Text style={styles.signupbtn} onPress={() => navigation.navigate("Login")}>
                Already have an account
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  view1: {
    padding: Spacing,
  },

  view2: {
    alignItems: "center",
  },

  txt1: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Fonts["poppins-bold"],
    marginVertical: Spacing * 3,
  },

  txt2: {
    fontFamily: Fonts["poppins-regular"],
    fontSize: FontSize.small,
    maxWidth: "80%",
    textAlign: "center",
  },

  signinbtn: {
    fontFamily: Fonts["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.large,
  },

  signupbtn: {
    fontFamily: Fonts["poppins-semiBold"],
    color: Colors.text,
    textAlign: "center",
    fontSize: FontSize.small,
  },

  uploadButton: {
    backgroundColor: Colors.primary,
    padding: Spacing * 2,
    borderRadius: Spacing,
    marginTop: Spacing,
  },

  uploadButtonText: {
    fontFamily: Fonts["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.medium,
  },

  uploadedImage: {
    width: 150,
    height: 150,
    borderRadius: Spacing,
    marginTop: Spacing,
    alignSelf: "center",
  },

  errorText: {
    color: "red",
    fontFamily: Fonts["poppins-regular"],
    fontSize: FontSize.small,
    marginLeft: 6.5,
  },
});
