import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native';
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/Header";
import Ionicons from "react-native-vector-icons/Ionicons";

const AppointmentScreen = ({ route, navigation }) => {
  const title = "Appointment";
  const previosScreen = "Doctors";
  const { doctor } = route.params;
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    setSelectedSlot(null);
    fetchTimeSlots();
  }, []);

  const fetchTimeSlots = () => {
    // Extract the availability data from the doctor parameter
    const availability = doctor.availability;

    // Create time slots array based on availability data
    const slots = availability.map((slot) => ({
      id: slot._id,
      day: slot.day,
      time: `${slot.startTime} - ${slot.endTime}`,
    }));

    setTimeSlots(slots);
  };

  const handleSlotSelection = (slot) => {
    if (selectedSlot && selectedSlot.id === slot.id) {
      // Clicked on the selected slot, unselect it
      setSelectedSlot(null);
    } else {
      // Clicked on a different slot, select it
      setSelectedSlot(slot);
    }
  };

  const handlePayment = () => {
    if (selectedSlot) {
      // Navigate to the payment screen
      navigation.navigate('Payment');
    } else {
      // Display an alert if no time slot is selected
      Alert.alert('Error', 'Please select a time slot.');
    }
  };

  const renderTimeSlot = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleSlotSelection(item)}
      style={[
        styles.timeSlot,
        selectedSlot && selectedSlot.id === item.id && styles.selectedTimeSlot
      ]}
    >
      <Text style={styles.day}>{item.day}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Header data={title} pre={previosScreen} />
      <View style={styles.container}>
        <Text style={styles.title}>Select a time slot:</Text>
        <FlatList
          data={timeSlots}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTimeSlot}
        />
       
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Ionicons name="calendar-outline" size={25} color="#fff" />
          <Text style={styles.buttonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};







const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  timeSlot: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
   
  },
  selectedTimeSlot: {
    backgroundColor: "orange", 
    borderRadius:10
    
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft:20
  },
  time: {
    fontSize: 16,
    marginLeft:20
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    // width: "50%",
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
  },
  buttonText: {
    fontSize: FontSize.large,
    color: Colors.onPrimary,
    fontFamily: Fonts["poppins-bold"],
    textAlign: "center",
    marginLeft: 10,
    marginTop: 3,
  },
});

export default AppointmentScreen;
