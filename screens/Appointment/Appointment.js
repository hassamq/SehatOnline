import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from "../../components/Header";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";

const Appointments = ({ navigation }) => {
  const title = "Appointments";
  const previosScreen = null;
  const [bookedAppointments, setBookedAppointments] = useState([
    { id: 1, doctor: "Dr. John Doe", date: "June 15, 2023", time: "10:00 AM" },
    { id: 2, doctor: "Dr. Jane Smith", date: "June 16, 2023", time: "2:00 PM" },
    { id: 3, doctor: "Dr. Michael Johnson", date: "June 17, 2023", time: "9:30 AM" },
    // Add more appointments as needed
  ]);
  const [previousAppointments, setPreviousAppointments] = useState([
    { id: 4, doctor: "Dr. Sarah Thompson", date: "June 10, 2023", time: "3:00 PM" },
    { id: 5, doctor: "Dr. Mark Wilson", date: "June 12, 2023", time: "11:30 AM" },
    // Add more previous appointments as needed
  ]);

  const renderAppointment = ({ item }) => (
  <View style={[styles.appointmentContainer, styles.upcomingAppointment]}>
    <Text style={styles.doctor}>{item.doctor}</Text>
    <Text style={styles.dateTime}>{item.date} at {item.time}</Text>
    {/* Display any other relevant information about the appointment */}
  </View>
);


  return (
    <>
      <Header data={title} pre={previosScreen} />
      <View style={styles.container}>
        
        <ScrollView style={styles.scrollView}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          {bookedAppointments.length > 0 ? (
            <ScrollView>
              {bookedAppointments.map((appointment) => (
                <View key={appointment.id} style={styles.upcomingappointmentContainer}>
                  <Text style={styles.doctor}>{appointment.doctor}</Text>
                  <Text style={styles.dateTime}>{appointment.date} at {appointment.time}</Text>
                </View>
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.noAppointments}>No upcoming appointments</Text>
          )}
          <Text style={styles.sectionTitle}>Previous Appointments</Text>
          {previousAppointments.length > 0 ? (
            <ScrollView>
              {previousAppointments.map((appointment) => (
                <View key={appointment.id} style={styles.appointmentContainer}>
                  <Text style={styles.doctor}>{appointment.doctor}</Text>
                  <Text style={styles.dateTime}>{appointment.date} at {appointment.time}</Text>
                </View>
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.noAppointments}>No previous appointments</Text>
          )}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: Fonts["poppins-bold"],
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    fontFamily: Fonts["poppins-bold"],
  },
  appointmentContainer: {
    marginBottom: 24,
    backgroundColor: "#D3D3D3",
    padding: 16,
    borderRadius: 8,
  },
  upcomingappointmentContainer:{
    marginBottom: 24,
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
    opacity:0.8
    
  },
  doctor: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: Fonts["poppins-bold"],
  },
  dateTime: {
    fontSize: 14,
    color: "#5A5A5A",
    fontFamily: Fonts["poppins-regular"],
  },
  noAppointments: {
    marginTop: 8,
    fontStyle: 'italic',
    color: "#5A5A5A",
    fontFamily: Fonts["poppins-regular"],
  },
});

export default Appointments;
