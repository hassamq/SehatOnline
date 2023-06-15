import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";
import Header from "../../components/Header";
import Spacing from "../../Constants/spacing";
import Colors from "../../Constants/colors";
import Fonts from "../../Constants/Fonts";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const testsData = [
  { id: 1, name: "CBC", price: "2500 PKR" },
  { id: 2, name: "Blood Glucose", price: "500 PKR" },
  { id: 3, name: "Cholesterol", price: "1500 PKR" },
  { id: 4, name: "Thyroid Panel", price: "2000 PKR" },
  { id: 5, name: "Liver Function Test", price: "3000 PKR" },
  { id: 6, name: "Kidney Function Test", price: "2500 PKR" },
  { id: 7, name: "Hemoglobin A1c", price: "1000 PKR" },
  { id: 8, name: "Urinalysis", price: "500 PKR" },
  { id: 9, name: "Electrolyte Panel", price: "2000 PKR" },
  { id: 10, name: "C-Reactive Protein", price: "1500 PKR" },
];

const HomeSamplingTests = ({navigation}) => {
  const title = "Home Sampling Tests";
  const previosScreen = null;

  const [selectedTests, setSelectedTests] = useState([]);

  const handleTestSelection = (test) => {
    if (selectedTests.includes(test)) {
      setSelectedTests(selectedTests.filter((item) => item !== test));
    } else {
      setSelectedTests([test, ...selectedTests]);
    }
  };

  const handleBooking = () => {
    if (selectedTests.length === 0) {
      Alert.alert("Error", "Please select at least one test.");
      return;
    }
  
    // Extract the selected test data
    const selectedTestDetails = selectedTests.map((test) => {
      const { id, name, price } = test;
      return { id, name, price };
    });
  
    navigation.navigate("HomeSamplingPayment", { selectedTests: selectedTestDetails });
  };
  

  const renderTestItem = ({ item }) => {
    const isSelected = selectedTests.includes(item);

    return (
      <TouchableOpacity
        style={[styles.testItem, isSelected && styles.selectedTestItem]}
        onPress={() => handleTestSelection(item)}
      >
        {isSelected ? (
          <FontAwesome name="check" size={20} color={Colors.white} />
        ) : (
          <View style={styles.unselectedTestCircle} />
        )}
        <View style={styles.testItemTextContainer}>
          <Text style={[styles.testItemName, isSelected && styles.selectedTestText]}>
            {item.name}
          </Text>
          <Text style={styles.testItemPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header data={title} pre={previosScreen} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Tests</Text>
          <View style={styles.testsContainer}>
            <ScrollView>
              {testsData.map((test) => (
                <View key={test.id}>{renderTestItem({ item: test })}</View>
              ))}
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleBooking}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: Spacing * 3,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Spacing * 2,
    paddingTop: Spacing * 2,
  },
  testsContainer: {
    maxHeight: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  testItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing * 2,
    paddingVertical: Spacing * 2,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  unselectedTestCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.black,
    marginRight: Spacing * 2,
  },
  selectedTestItem: {
    backgroundColor: Colors.primary,
  },
  selectedTestText: {
    color: Colors.white,
  },
  testItemTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  testItemName: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts["poppins-regular"],
  },
  testItemPrice: {
    fontSize: 16,
    fontFamily: Fonts["poppins-regular"],
    color: Colors.gray,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: Spacing,
    fontFamily: Fonts["poppins-bold"],
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 2,
    borderRadius: 8,
    marginHorizontal: Spacing * 4,
    marginBottom: Spacing * 2,
    marginTop:Spacing*3
  },
  buttonText: {
    fontFamily: Fonts["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: 16,
  },
});

export default HomeSamplingTests;
