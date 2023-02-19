import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";

const Doctor_card = ({
  image,
  name,
  education,
  specialization,
  experience,
  onViewProfile,
  onBookAppointment,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onViewProfile}>
        <View style={styles.card}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.education}>{education}</Text>
            <Text style={styles.specialization}>{specialization}</Text>
            <Text style={styles.experience}>{experience} of experience</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.Viewbutton} onPress={onViewProfile}>
          <Text style={styles.ViewbuttonText}>View Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Appointmentbutton}
          onPress={onBookAppointment}
        >
          <Text style={styles.buttonText}>Book an Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    margin: 16,
    backgroundColor: "#FFF",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    flexDirection: "row",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  details: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
  name: {
    fontSize: FontSize.large,
    fontWeight: Fonts["poppins-Bold"],
    marginBottom: 8,
  },
  education: {
    fontSize: FontSize.medium,
    fontWeight: Fonts["poppins-Bold"],
    color: "#777",
    marginBottom: 4,
  },
  specialization: {
    fontSize: FontSize.small,
    fontWeight: Fonts["poppins-Bold"],
    color: "#777",
    marginBottom: 4,
  },
  experience: {
    fontWeight: Fonts["poppins-regular"],
    fontSize: 16,
    color: "#777",
  },
  buttons: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  Viewbutton: {
    backgroundColor: Colors.primary,

    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "48%",
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    alignItems: "center",
  },
  Appointmentbutton: {
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    // width: "48%",
    borderRadius: Spacing,
  },
  ViewbuttonText: {
    fontSize: FontSize.small,
    color: Colors.onPrimary,
    fontFamily: Fonts["poppins-regular"],
    textAlign: "center",
  },
  AppointmentbuttonText: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: Fonts["poppins-regular"],
    textAlign: "center",
  },
};

export default Doctor_card;
