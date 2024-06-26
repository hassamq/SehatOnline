import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Button,
  ActivityIndicator,
  Alert
} from "react-native";
import React, { useState, useEffect, useContext, useLayoutEffect} from "react";
import api from "../../api/api"

import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import Card from "./Card";
import DoctorCard from "./DoctorCard";
import { LinearGradient } from "expo-linear-gradient";



import { UserContext } from "../../context/UserContext";

export default function Home({ navigation }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchDoctors = async () => {
    try {
      const response = await api.getAllDoctors();
      setDoctors(response);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.log('Error fetching doctors:', error);
      setLoading(false); // Set loading to false in case of error
      Alert.alert("Something went wrong")
    }
  };
  const { email, username, image } = useContext(UserContext);
  const imageUrl = `http://192.168.10.11:3000/uploads/users/${image}`;
  // console.log(imageUrl)
  // const Doctordata = [
  //   {
  //     id: "1",
  //     name: "Dr. John Doe",
  //     specialization: "Cardiologist",
  //     image:
  //       "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: "2",
  //     name: "Dr. Jane Smith",
  //     specialization: "Dermatologist",
  //     image:
  //       "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: "3",
  //     name: "Dr. Mike Johnson",
  //     specialization: "Pediatrician",
  //     image:
  //       "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: "4",
  //     name: "Dr. Emily Jones",
  //     specialization: "Ophthalmologist",
  //     image:
  //       "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];

  const data = [
    {
      id: "1",
      title: "Online Consultation",
      description: "Get consultation from doctors online",
      iconName: "user-md",
      onPress: () => {
        console.log("Online Consultation card pressed");
        navigation.navigate("Doctors")
        // Add your custom logic here
      },
    },
    {
      id: "2",
      title: "Home Sampling for Tests",
      description: "Get your samples collected from home",
      iconName: "home",
      onPress: () => {
        console.log("Home Sampling for Tests card pressed");
        navigation.navigate("HomeSampling")
      },
    },
    {
      id: "3",
      title: "Book Lab Tests",
      description: "Book lab tests at your convenience",
      iconName: "calendar",
      onPress: () => {
        console.log("Book Lab Tests card pressed");
        navigation.navigate("LabTest")
        // Add your custom logic here
      },
    },
    {
      id: "4",
      title: "Medicine Delivery",
      description: "Get your medicines delivered to your doorstep",
      iconName: "medkit",
      onPress: () => {
        console.log("Medicine Delivery card pressed");
        navigation.navigate("Medicine")
      },
    },
    {
      id: "5",
      title: "Symptoms Checker",
      description: "Check your symptoms and get recommendations",
      iconName: "stethoscope",
      onPress: () => {
        console.log("Symptoms Checker card pressed");
        navigation.navigate("SymptomsChecker")
      },
    },
  ];
  const onViewProfile = (doctor) => {
    // handle View Profile button press
    navigation.navigate("DoctorsDetail", { doctor });
  };

  useEffect(() => {
    fetchDoctors();
  }, []);
  

  return (
    
    <SafeAreaView style={styles.container}>
      {/* Header */}
      
      
      <View style={styles.header} flexDirection="row">
        <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.Image} />
        </View>

        <View style={styles.title}>
          <Text style={styles.Bigtitle}>Hi,{username}</Text>
          <Text style={styles.Smalltitle}>Jan 10,2023</Text>
        </View>
        <View flexDirection="row">
          {/* <Image
            source={require("../../assets/images/Notification.png")}
            style={styles.bell}
          /> */}

          <Icon
            style={{
              marginTop: Spacing,
              padding: Spacing,
              marginRight: Spacing * 2,
            }}
            name="bars"
            size={20}
            color="black"
            onPress={() => navigation.openDrawer()}
          />
        </View>
      </View>
      
      {/* Header end */}

      {/* Banner */}
      {loading ? ( // Render activity indicator while loading
        <View style={styles.activityContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : (
      <ScrollView>
        {/* Search */}
        {/* <View style={styles.searchcontainer}>
          <View style={styles.inputContainer}>
            <Icon name="search" size={20} color={Colors.primary} />
            <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="#b0c1d1"
            />
          </View>
        </View> */}
        {/* Search End */}
        <View style={styles.screen}>
          <ImageBackground
            flexDirection="row"
            style={styles.banner}
            source={require("../../assets/images/background.jpg")}
          >
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontFamily: Fonts["poppins-bold"],
                  FontSize: FontSize.xxLarge,
                  color: Colors.onPrimary,
                  // marginTop: -20,
                }}
              >
                Consult Online{" "}
              </Text>
              <Text
                style={{
                  fontFamily: Fonts["poppins-regular"],
                  FontSize: FontSize.large,
                  color: Colors.onPrimary,
                }}
              >
                {" "}
                With Top Specialists
              </Text>
              <Text
                style={{
                  fontFamily: Fonts["poppins-regular"],
                  FontSize: FontSize.large,
                  color: Colors.onPrimary,
                  opacity: 0.6,
                }}
              >
                (Anytime,Anywhere)
              </Text>
            </View>
          </ImageBackground>
          <Image
            source={require("../../assets/images/modal.png")}
            style={{
              position: "absolute",
              bottom: 0,
              zIndex: 10,
              right: 0,
              height: "130%",
              width: "40%",
              // transform: [{ rotateY: "180deg" }],
            }}
            // resizeMode="contain"
          />
        </View>
        <View style={{ marginHorizontal: "6%", marginTop: Spacing }}>
          <Text
            style={{
              fontFamily: Fonts["poppins-bold"],
              FontSize: FontSize.xxLarge,
            }}
          >
            Explore More
          </Text>
        </View>
        {/* Banner End */}

        {/* Explore More */}

        <View style={styles.container1}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
        
          <Card
            title={item.title}
            description={item.description}
            iconName={item.iconName}
            onPress={item.onPress} // Pass onPress to the Card component
          />
       
      </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            maxToRenderPerBatch={3}
          />
        </View>

        {/* Doctors */}

        <View style={{ marginHorizontal: "6%", marginTop: Spacing }}>
          <View style={styles.headingContainer}>
            <Text
              style={{
                fontFamily: Fonts["poppins-bold"],
                FontSize: FontSize.xxLarge,
              }}
            >
              Doctors
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Doctors");
              }}
              style={{
                padding: 8.5,
                backgroundColor: Colors.primary,
                marginVertical: Spacing / 2,

                shadowColor: Colors.text,
                shadowOffset: {
                  width: 0,
                  height: Spacing,
                },
                shadowOpacity: 0.3,
                borderBottomLeftRadius: 15,
                borderTopRightRadius: 15,
                borderRadius: 5,
                height: 33,
              }}
            >
              <Text style={styles.signinbtn}>View All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            
            data={doctors}
            keyExtractor={(item) => item.id}
            renderItem={({ item , index }) => (
              <View style={styles.DoctorcardContainer}>
                <DoctorCard
                key={item.id}
                  name={item.name}
                  specialization={item.specialty}
                  image={`http://192.168.10.11:3000/uploads/Doctors/${item.image}`}
                  onPress={() => onViewProfile(item)}
                />
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        
      </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing * 4,
    flex: 1,
    // borderWidth: 1,
  },
  header: {
    pading: Spacing * 1.5,

    marginLeft: Spacing,
  },
  imageContainer: {
    height: Spacing * 5,
    width: Spacing * 5,
    borderRadius: Spacing * 2.5,
    overflow: "hidden",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  title: {
    paddingHorizontal: Spacing,
    flex: 1,
    alignContent: "center",
    paddingHorizontal: Spacing,
  },
  Bigtitle: {
    fontFamily: Fonts["poppins-semiBold"],
    fontSize: FontSize.medium,
  },
  Smalltitle: {
    fontFamily: Fonts["poppins-regular"],
    fontSize: FontSize.small,
    opacity: 0.6,
  },
  bell: {
    height: Spacing * 3,
    width: Spacing * 3,
    // resizeMode: "contain",
    marginTop: Spacing,
    padding: Spacing,
    marginRight: Spacing * 2,
  },
  banner: {
    // marginTop: "10%",
    padding: Spacing * 5,

    // resizeMode: "contain",
    borderRadius: Spacing * 2,
    overflow: "hidden",
    // flexDirection: "row,",
  },
  screen: {
    margin: "3%",
    marginTop: Spacing * 5,
  },

  container1: {
    backgroundColor: Colors.onPrimary,
    paddingTop: 20,
    paddingBottom: 20,
  },
  cardContainer: {
    // marginLeft: 10,
    // marginRight: 10,
    width: 200,
    // backgroundColor: "white",
    // borderRadius: 10,
    // elevation: 2,
  },
  searchcontainer: {
    margin: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 30,
    paddingLeft: 15,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    fontSize: 16,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2596be",
  },
  // viewAll: {
  //   fontSize: 16,
  //   color: "#2596be",
  // },
  signinbtn: {
    fontFamily: Fonts["poppins-regular"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: 12,
  },
  DoctorcardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 10,
    width: 200,
  },
});
