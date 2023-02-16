import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
import AppTextInput from "../../components/AppTextInput";

const Login = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback>
      <SafeAreaView>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Text style={styles.txt1}>Login here</Text>
            <Text style={styles.txt2}>Welcome back you've been missed!</Text>
          </View>

          <View style={{ marginVertical: Spacing * 3 }}>
            <AppTextInput placeholder="Email" />
            <AppTextInput placeholder="Password" secureTextEntry />
          </View>

          <View>
            <Text style={styles.forgotpswd}>Forgot your Password?</Text>
          </View>

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
          >
            <Text style={styles.signinbtn}>Sign in</Text>
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

          {/* Other accounts */}
          <View>
            <Text style={styles.otherbtn}>Or continue with</Text>

            <View
              style={{
                marginTop: Spacing,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}
              ></TouchableOpacity>
            </View>
          </View>
        </View>
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
});
