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
  Alert,
  ActivityIndicator
  
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
import AppTextInput from "../../components/AppTextInput";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";

import api from "../../api/api";
const Login = ({ navigation }) => {
  const handlePress = () => {
    Keyboard.dismiss();
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [loading, setLoading] = useState(false);

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

  const Submit_btn = async () => {
    if (email === '' || password === '') {
      Alert.alert('Enter all info');
    } else if (!emailError && !passwordError) {
      try {
        setLoading(true); // Set loading state to true

        const userData = { email, password };
        const response = await api.loginUser(userData);

        // Check if login was successful
        if (response.token) {
          console.log(response.token)
          // Login successful, save user data to AsyncStorage
          await AsyncStorage.setItem('AccessToken', response.token);
          await AsyncStorage.setItem('Username', response.user.username);
          await AsyncStorage.setItem('Email', response.user.email);
          await AsyncStorage.setItem('Image', response.user.image);

          // Navigate to the desired screen
          navigation.navigate('DrawerMenu');
        } else {
          // Login failed, show error message
          Alert.alert('Login failed');
        }
      } catch (error) {
        // Handle error during login
        Alert.alert('Error during login');
      }
      setLoading(false)
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.view1}>
            <View style={styles.view2}>
              <Text style={styles.txt1}>Login here</Text>
              <Text style={styles.txt2}>Welcome back you've been missed!</Text>
            </View>

            <View style={{ marginVertical: Spacing * 3 }}>
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
            </View>

            {/* <View>
              <Text style={styles.forgotpswd}>Forgot your Password?</Text>
            </View> */}

            {/* Sign in */}
            <TouchableOpacity
      style={{
        padding: Spacing * 2,
        backgroundColor: Colors.primary,
        marginVertical: Spacing * 3,
        borderRadius: Spacing,
        shadowColor: Colors.primary,
        shadowOffset: {
          width: 0,
          height: Spacing,
        },
        shadowOpacity: 0.3,
      }}
      onPress={Submit_btn} // Use the updated login function
      disabled={loading} // Disable the button while loading is true
    >
      {loading ? ( // Conditionally render the activity indicator
        <ActivityIndicator color={Colors.white} size="small" />
      ) : (
        <Text style={styles.signinbtn}>Sign in</Text>
      )}
    </TouchableOpacity>

            {/* Sign up */}

            <TouchableOpacity
              style={{
                padding: Spacing * 0.2,
              }}
            >
              <Text
                style={styles.signupbtn}
                onPress={() => navigation.navigate("Register")}
              >
                Create new account
              </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
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
    fontFamily: Fonts["poppins-semiBold"],
    fontSize: FontSize.large,
    maxWidth: "60%",
    textAlign: "center",
  },

  forgotpswd: {
    fontFamily: Fonts["poppins-semiBold"],
    fontSize: FontSize.small,
    color: Colors.primary,
    alignSelf: "flex-end",
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

  otherbtn: {
    padding: Spacing * 3,
    fontFamily: Fonts["poppins-semiBold"],
    color: Colors.primary,
    textAlign: "center",
    fontSize: FontSize.small,
  },

  social_icons: {
    padding: Spacing,
    backgroundColor: Colors.gray,
    borderRadius: Spacing / 2,
    marginHorizontal: Spacing,
  },
  errorText: {
    color: "red",
    fontFamily: Fonts["poppins-regular"],
    fontSize: FontSize.small,
    marginLeft: 6.5,
  },
});
