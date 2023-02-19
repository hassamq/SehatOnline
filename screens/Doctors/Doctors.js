import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import Doctor_card from "./Doctor_card";
const doctors = [
  {
    image:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Dr. John Doe",
    education: "MD, MPH",
    specialization: "Cardiology",
    experience: "10 years",
  },
  {
    image: "https://www.example.com/doctor2.jpg",
    name: "Dr. Jane Smith",
    education: "MD, PhD",
    specialization: "Dermatology",
    experience: "12 years",
  },
  {
    image: "https://www.example.com/doctor3.jpg",
    name: "Dr. James Wilson",
    education: "MD",
    specialization: "Neurology",
    experience: "8 years",
  },
  {
    image: "https://www.example.com/doctor4.jpg",
    name: "Dr. Rachel Green",
    education: "MD, MPH",
    specialization: "Pediatrics",
    experience: "9 years",
  },
  {
    image: "https://www.example.com/doctor5.jpg",
    name: "Dr. Michael Scott",
    education: "MD",
    specialization: "Psychiatry",
    experience: "7 years",
  },
  {
    image: "https://www.example.com/doctor6.jpg",
    name: "Dr. Leslie Knope",
    education: "MD, MPH",
    specialization: "Public Health",
    experience: "11 years",
  },
  {
    image: "https://www.example.com/doctor7.jpg",
    name: "Dr. Meredith Grey",
    education: "MD",
    specialization: "Surgery",
    experience: "13 years",
  },
];

const Doctors = () => {
  const navigation = useNavigation();
  const title = "Doctors";
  const previosScreen = null;

  const onViewProfile = () => {
    // handle View Profile button press
    navigation.navigate("DoctorsDetail");
  };

  const onBookAppointment = () => {
    // handle Book an Appointment button press
  };

  return (
    <View>
      <Header data={title} pre={previosScreen} />

      <View style={{ paddingBottom: 300 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
          {doctors.map((doctor, index) => (
            <Doctor_card
              key={index}
              image={doctor.image}
              name={doctor.name}
              education={doctor.education}
              specialization={doctor.specialization}
              experience={doctor.experience}
              onViewProfile={onViewProfile}
              onBookAppointment={onBookAppointment}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
  // ;
};

export default Doctors;

const styles = StyleSheet.create({});
