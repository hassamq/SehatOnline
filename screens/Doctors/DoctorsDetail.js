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
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "../../components/Header";
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";

const DoctorsDetail = ({ route, navigation }) => {
  const title = "Doctor Detail";
  const previosScreen = "Doctors";
  const { doctor } = route.params;
  return (
    <View>
      <Header data={title} pre={previosScreen} />

      <View style={{ paddingBottom: 300 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
          <View style={styles.container}>
            <ImageBackground
              source={{ uri: doctor.image }}
              style={styles.backgroundImage}
            ></ImageBackground>

            <View style={styles.detailsContainer}>
              <Image
                source={{ uri: doctor.image }}
                style={styles.profileImage}
              />

              <Text style={styles.name}>{doctor.name}</Text>
              <Text style={styles.education}>
                <Icon name="graduation-cap" size={20} color={Colors.primary} />{" "}
                {doctor.education}
              </Text>
              <Text style={styles.specialization}>
                <Icon name="stethoscope" size={20} color={Colors.primary} />{" "}
                {doctor.specialization}
              </Text>
              <Text style={styles.experience}>
                <Icon name="clock-o" size={20} color={Colors.primary} />{" "}
                {doctor.experience} of experience
              </Text>

              <View style={styles.bioContainer}>
                <Text style={styles.bioText}>{doctor.bio}</Text>
              </View>

              <TouchableOpacity style={styles.button} >
                <Ionicons name="calendar-outline" size={25} color="#fff" />
                <Text style={styles.buttonText} >Book an Appointment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DoctorsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  detailsContainer: {
    marginTop: -50,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 20,
    borderWidth: 3.5,
    borderColor: Colors.primary,
  },
  name: {
    fontSize: FontSize.xLarge,
    fontFamily: Fonts["poppins-bold"],

    marginBottom: 10,
    textAlign: "center",
  },
  education: {
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-semiBold"],

    marginBottom: 10,
    textAlign: "center",
  },
  specialization: {
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-semiBold"],

    marginBottom: 10,
    textAlign: "center",
  },
  experience: {
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-semiBold"],
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2596be",
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  bioContainer: {
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.lightGrey,
    borderRadius: 10,
  },
  bioText: {
    fontSize: FontSize.medium,

    fontFamily: Fonts["poppins-semiBold"],
    color: Colors.darkGrey,
    fontFamily: Fonts.regular,
    lineHeight: 24,
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
