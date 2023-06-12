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
    bio: "Dr. John Doe is a board-certified cardiologist with a decade of experience in the field. He specializes in the diagnosis and treatment of heart disease and works closely with his patients to develop personalized treatment plans. Dr. Doe is committed to providing high-quality, compassionate care to all of his patients.",
  },
  {
    image:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Dr. Jane Smith",
    education: "MD, PhD",
    specialization: "Dermatology",
    experience: "12 years",
    bio: "Dr. Jane Smith is a board-certified dermatologist with over a decade of experience in treating a wide range of skin conditions. She is an expert in the diagnosis and treatment of skin cancer, acne, and psoriasis, and is committed to providing personalized care to each of her patients. Dr. Smith is also an active member of several professional organizations and is dedicated to advancing the field of dermatology through research and education.",
  },
  {
    image:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Dr. James Wilson",
    education: "MD",
    specialization: "Neurology",
    experience: "8 years",
    bio: "Dr. James Wilson is a board-certified neurologist with a focus on the diagnosis and treatment of neurological disorders, including migraines, seizures, and Alzheimer's disease. He is committed to providing his patients with the highest level of care and works closely with them to develop treatment plans tailored to their individual needs. Dr. Wilson is also actively involved in research and is dedicated to advancing the field of neurology.",
  },
  {
    image: "https://www.example.com/doctor4.jpg",
    name: "Dr. Rachel Green",
    education: "MD, MPH",
    specialization: "Pediatrics",
    experience: "9 years",
    bio: "Dr. Rachel Green is a board-certified pediatrician with nearly a decade of experience in providing care to children of all ages. She is dedicated to ensuring that her patients receive the best possible care and works closely with parents to develop treatment plans that meet the unique needs of each child. Dr. Green is also committed to staying up-to-date with the latest advances in pediatric medicine.",
  },
  {
    image: "https://www.example.com/doctor5.jpg",
    name: "Dr. Michael Scott",
    education: "MD",
    specialization: "Psychiatry",
    experience: "7 years",
    bio: "Dr. Michael Scott is a compassionate psychiatrist with 7 years of experience. He is dedicated to helping his patients overcome mental health challenges and achieve a fulfilling and healthy life.",
  },
  {
    image: "https://www.example.com/doctor6.jpg",
    name: "Dr. Leslie Knope",
    education: "MD, MPH",
    specialization: "Public Health",
    experience: "11 years",
    bio: "Dr. Leslie Knope is a dedicated public health physician with 11 years of experience. She is passionate about promoting healthy behaviors and improving access to healthcare for all individuals in the community.",
  },
  {
    image: "https://www.example.com/doctor7.jpg",
    name: "Dr. Meredith Grey",
    education: "MD",
    specialization: "Surgery",
    experience: "13 years",
    bio: "Dr. Meredith Grey is an accomplished surgeon with 13 years of experience. She is committed to providing the highest quality of surgical care to her patients and is dedicated to helping them achieve optimal health.",
  },
];

const Doctors = () => {
  const navigation = useNavigation();
  const title = "Doctors";
  const previosScreen = null;

  const onViewProfile = (doctor) => {
    // handle View Profile button press
    navigation.navigate("DoctorsDetail", { doctor });
  };

  const onBookAppointment = () => {
    // handle Book an Appointment button press
    navigation.navigate("AppointmentScreen")
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
              onViewProfile={() => onViewProfile(doctor)}
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
