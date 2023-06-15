import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Header from "../../components/Header";
import Spacing from "../../Constants/spacing";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AppTextInput from "../../components/AppTextInput";

export default function HomeSamplingPaymentScreen({ navigation, route }) {
  const { selectedTests } = route.params;
  const title = "Payment";
  const previosScreen = "HomeSampling";
  const [loading, setLoading] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [contactDetails, setContactDetails] = useState({
    name: "",
    phoneNumber: "",
    location: "",
  });
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate the total price of selected tests
  const calculateTotalPrice = () => {
    let total = 0;
    selectedTests.forEach((test) => {
      const price = parseInt(test.price.replace("PKR", "").trim());
      total += price;
    });
    return total;
  };

  const handlePayLater = () => {
    setLoading(true);

    // Simulating a delay for demonstration purposes
    setTimeout(() => {
      setLoading(false);
      setPaymentConfirmed(true);
    }, 2000);
  };

  const handleContinue = () => {
    // Implement logic to navigate to the next screen or reset the app state
    setPaymentConfirmed(false);
    navigation.navigate("HomeSampling");
  };

  const isContactDetailsValid = () => {
    const { name, phoneNumber, location } = contactDetails;
    return name.trim() !== "" && phoneNumber.trim() !== "" && location.trim() !== "";
  };

  if (paymentConfirmed) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <FontAwesome
            name="check-circle"
            size={100}
            color={"green"}
            style={{ alignSelf: "center", marginTop: 30 }}
          />
          <Text style={styles.title}>Payment Confirmed!</Text>
        </View>
        <Text style={styles.subTitle}>
          Your payment has been successfully confirmed.
        </Text>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <Header data={title} pre={previosScreen} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      {loading ? (
            <ActivityIndicator size="large" color={"black"} />
          ) : (
        <View style={styles.container}>
          <View style={styles.testDetailsContainer}>
            <Text style={styles.sectionTitle}>Home Sampling Test Details</Text>
            <View style={styles.testListContainer}>
              {selectedTests.map((test) => (
                <View key={test.id} style={styles.testItemContainer}>
                  <Text style={styles.testName}>{test.name}</Text>
                  <Text style={styles.testPrice}>Price: {test.price}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.totalPrice}>
              Total Price: {calculateTotalPrice()} PKR
            </Text>
          </View>
          <Text style={styles.sectionTitle}>Contact Details</Text>
          <AppTextInput
            style={styles.contactInput}
            value={contactDetails.name}
            onChangeText={(text) =>
              setContactDetails({ ...contactDetails, name: text })
            }
            placeholder="Enter your name"
            
            autoCapitalize="words"
          />
          <AppTextInput
            style={styles.contactInput}
            value={contactDetails.phoneNumber}
            onChangeText={(text) =>
              setContactDetails({ ...contactDetails, phoneNumber: text })
            }
            placeholder="Enter your phone number"
            
            keyboardType="phone-pad"
          />
          <AppTextInput
            style={styles.contactInput}
            value={contactDetails.location}
            onChangeText={(text) =>
              setContactDetails({ ...contactDetails, location: text })
            }
            placeholder="Enter your location"
            
            autoCapitalize="words"
          />
          <TouchableOpacity
            style={[
              styles.payLaterButton,
              !isContactDetailsValid() && styles.disabledPayLaterButton,
            ]}
            onPress={handlePayLater}
            disabled={!isContactDetailsValid() || loading}
          >
            <FontAwesome name="credit-card" size={24} color={"white"} />
            <Text style={styles.payLaterText}>Pay Later</Text>
          </TouchableOpacity>
        </View>
          )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: Spacing * 3,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing * 2,
    paddingVertical: Spacing * 3,
  },
  testDetailsContainer: {
    marginBottom: Spacing * 3,
  },
  testListContainer: {
    marginTop: Spacing,
    marginBottom: Spacing * 2,
    
  },
  testItemContainer: {
    marginBottom: Spacing,
    backgroundColor:Colors.gray,
    borderRadius:10,
    opacity:0.78
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: Spacing,
    fontFamily: Fonts["poppins-bold"],
  },
  testName: {
    fontSize: 16,
    fontFamily: Fonts["poppins-regular"],
    marginBottom: 4,
    marginLeft:20
  },
  testPrice: {
    fontSize: 16,
    fontFamily: Fonts["poppins-regular"],
    color: Colors.primary,
    marginLeft:20
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: Fonts["poppins-bold"],
    marginBottom: Spacing * 2,
    textAlign: "right",
    color:"green"
  },
  contactInput: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 8,
    padding: 10,
    marginBottom: Spacing * 2,
    fontFamily: Fonts["poppins-regular"],
    fontSize: 16,
    color: Colors.black,
  },
  payLaterButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
    marginTop: Spacing * 2,
  },
  disabledPayLaterButton: {
    opacity: 0.5,
  },
  payLaterText: {
    fontSize: 16,
    fontFamily: Fonts["poppins-bold"],
    color: Colors.onPrimary,
    marginLeft: 16,
  },
  continueButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: Spacing * 2,
  },
  continueButtonText: {
    fontSize: 16,
    fontFamily: Fonts["poppins-bold"],
    color: Colors.onPrimary,
  },
  header: {
    alignItems: "center",
    marginTop: "20%",
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts["poppins-bold"],
    textAlign: "center",
    marginTop: 16,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: Fonts["poppins-regular"],
    textAlign: "center",
    marginTop: 8,
  },
});
