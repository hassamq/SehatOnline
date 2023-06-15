import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/Header";

export default function Payment({ route,navigation }) {
  const title = "Payment";
  const previosScreen = "Medicine";
  const [loading, setLoading] = useState(false);
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [prescriptionImage, setPrescriptionImage] = useState(null);
//   console.log(route.params.prescriptionImage)

  const handlePayLater = () => {
    setLoading(true);

    // Simulating a delay for demonstration purposes
    setTimeout(() => {
      setLoading(false);
      setAppointmentBooked(true);
    }, 2000);
  };

  const handleContinue = () => {
    // Implement logic to navigate to the next screen or reset the app state
    setAppointmentBooked(false);
    navigation.navigate("Medicine");
  };

  const handleImageUpload = () => {
    // Implement logic to handle image upload
  };

  if (appointmentBooked) {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon
              name="check-circle"
              size={100}
              color={"green"}
              style={{ alignSelf: "center", marginTop: 30 }}
            />
            <Text style={styles.title}>Order Placed!</Text>
          </View>
          <Text style={styles.subTitle}>
            Your order has been successfully placed.We will contact you as soon as possible regarding your delivery.
          </Text>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  return (
    <>
      <Header data={title} pre={previosScreen} />
      <View style={styles.container}>
       
       

        {/* "Pay on Visit" button */}
        {loading ? (
          <ActivityIndicator size="large" color={"black"} />
        ) : (
          <TouchableOpacity
            style={styles.payLaterButton}
            onPress={handlePayLater}
            disabled={loading}
          >
            <>
              <Icon
                name="money"
                size={35}
                style={{ marginLeft: 30 }}
                color={"white"}
              />
              <Text style={styles.payLaterText}>Cash on Delivery</Text>
            </>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: "30%",
  },
  title: {
    fontSize: FontSize.large,
    fontFamily: Fonts["poppins-bold"],
    alignSelf: "center",
    marginBottom: 16,
  },
  subTitle: {
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-semibold"],
    marginBottom: 24,
    alignSelf: "center",
  },
  prescriptionImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    height: 200,
    marginBottom: 16,
  },
  prescriptionImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  uploadText: {
    fontFamily: Fonts["poppins-bold"],
    fontSize: FontSize.medium,
    color: Colors.primary,
  },
  payLaterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  payLaterText: {
    color: "white",
    fontSize: 21,
    marginLeft: 50,
    fontFamily: Fonts["poppins-bold"],
  },
  continueButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  continueButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
