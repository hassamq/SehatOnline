import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native';
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/Header";
import Ionicons from "react-native-vector-icons/Ionicons";


const AppointmentScreen = ({ navigation }) => {
  const title = "Appointment";
  const previosScreen = "Doctors";
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Fetch available time slots from the server
  useEffect(() => {
    fetchTimeSlots(); // Implement your own function to fetch time slots
  }, []);

  const fetchTimeSlots = () => {
    // Implement your API call to fetch available time slots
    // Update the 'timeSlots' state with the response data
    const response = [
      { id: 1, day: 'Monday', time: '09:00 AM' },
      { id: 2, day: 'Tuesday', time: '10:00 AM' },
      { id: 3, day: 'Wednesday', time: '11:00 AM' },
      { id: 4, day: 'Thursday', time: '01:00 PM' },
      { id: 5, day: 'Friday', time: '02:00 PM' },
      // Add more time slots as per your data
    ];
    setTimeSlots(response);
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
       
        <TouchableOpacity style={styles.button} onPress={handlePayment}  >
                <Ionicons name="calendar-outline" size={25} color="#fff" />
                <Text style={styles.buttonText} >Proceed to Payment</Text>
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
    backgroundColor: Colors.primary, // Change the color as desired
    
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
