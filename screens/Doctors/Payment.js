import React, { useState, useEffect, useContext, useLayoutEffect} from "react";
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
import api from "../../api/api";

import { UserContext } from "../../context/UserContext";

export default function Appointments({route, navigation }) {
  const title = "Payment";
  const previosScreen = null;
  const [loading, setLoading] = useState(false);
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const { email, username, image } = useContext(UserContext);
  const selectedSlot=route.params.selectedSlot;
  const doctor=route.params.doctor

  const handlePayLater = async () => {
    setLoading(true);
  
    try {
      // Create an appointment object with the required data
      const appointmentData = {
        userName: username,
        userEmail: email,
        doctorName: doctor.name,
        doctorEmail: doctor.email,
        time: selectedSlot.time,
        day: selectedSlot.day,
        status: 'Pending', 
      };
      console.log(appointmentData)
  
      // Call the bookAppointment function to make the appointment booking
      await api.bookAppointment(appointmentData);
  
      // Appointment booked successfully
    
      setAppointmentBooked(true);
      setLoading(false);
    } catch (error) {
      // Handle the error
      console.log(error);
      setLoading(false);
    }
  };
  const handleContinue = () => {
    // Implement logic to navigate to the next screen or reset the app state
    setAppointmentBooked(false);
    navigation.navigate("Doctors")
  };

  if (appointmentBooked) {
    return (
      <>
       
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon name="check-circle" size={100} color={"green"} style={{alignSelf:"center",marginTop:30}} />
            <Text style={styles.title}>Appointment Booked!</Text>
          </View>
          <Text style={styles.subTitle}>
            Your appointment has been successfully booked.
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
        {/* Your payment screen content */}
        

        {/* "Pay Later" button */}
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
                name="credit-card"
                size={35}
                style={{ marginLeft: 30 }}
                color={"black"}
              />
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
    marginTop:"30%"
  },
  title: {
    fontSize: FontSize.large,
    fontFamily:Fonts["poppins-bold"],
   alignSelf:"center",
    marginBottom: 16,
  },
  subTitle: {
    fontSize: FontSize.medium,
    fontFamily:Fonts["poppins-semibold"],
    marginBottom: 24,
    alignSelf:"center"
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
