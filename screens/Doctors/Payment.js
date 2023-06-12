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

export default function Appointments({ navigation }) {
  const title = "Payment";
  const previosScreen = "AppointmentScreen";
  const [loading, setLoading] = useState(false);

  const handlePayLater = () => {
    // Implement the logic for "Pay Later" button
    setLoading(true);

    // Simulating a delay for demonstration purposes
    setTimeout(() => {
      setLoading(false);
      console.log("Pay Later");
    }, 2000);
  };

  return (
    <>
      <Header data={title} pre={previosScreen} />
      <View style={styles.container}>
        {/* Your payment screen content */}
        {loading ? (
            <ActivityIndicator size="large" color={Colors.primary} />
          ) : (
       

       
        <TouchableOpacity
          style={styles.payLaterButton}
          onPress={handlePayLater}
          disabled={loading}
        >
          
            <>
              <Icon name="credit-card" size={35} style={{ marginLeft: 30 }} color={"black"} />
              <Text style={styles.payLaterText}>Pay on Visit</Text>
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
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
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
});
