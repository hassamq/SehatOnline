import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Checkbox from "../../components/Checkbox";
import Colors from "../../Constants/colors";
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Fonts from "../../Constants/Fonts";

const SymptomsChecker = () => {
  const [symptoms, setSymptoms] = useState({
    fever: false,
    cough: false,
    headache: false,
    fatigue: false,
    // Add more symptoms here...
  });

  const handleCheckboxPress = (key) => {
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [key]: !prevSymptoms[key],
    }));
  };

  const handleCheckSymptoms = () => {
    // Prepare the symptoms data to send to the AI backend
    const selectedSymptoms = Object.keys(symptoms).filter(
      (key) => symptoms[key]
    );

    // Send the symptoms data to the backend for AI processing
    // You can make an API request to your backend service here

    // Example API request using fetch:
    fetch("https://your-backend-api/check-symptoms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symptoms: selectedSymptoms }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the AI response
        // Display the diagnosis or suggestion to the user
        Alert.alert("AI Diagnosis", data.diagnosis);
      })
      .catch((error) => {
        console.error("Error checking symptoms:", error);
        // Handle the error gracefully
        Alert.alert("Error", "An error occurred while checking symptoms.");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Symptoms Checker</Text>
      <Text style={styles.subtitle}>Select the symptoms you're experiencing:</Text>

      <Checkbox
        label="Fever"
        checked={symptoms.fever}
        onPress={() => handleCheckboxPress("fever")}
      />
      <Checkbox
        label="Cough"
        checked={symptoms.cough}
        onPress={() => handleCheckboxPress("cough")}
      />
      <Checkbox
        label="Headache"
        checked={symptoms.headache}
        onPress={() => handleCheckboxPress("headache")}
      />
      <Checkbox
        label="Fatigue"
        checked={symptoms.fatigue}
        onPress={() => handleCheckboxPress("fatigue")}
      />
      {/* Add more checkboxes for other symptoms */}

      <TouchableOpacity style={styles.checkButton} onPress={handleCheckSymptoms}>
        <Text style={styles.checkButtonText}>Check Symptoms</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: FontSize.large,
    fontFamily: Fonts["poppins-bold"],
    marginBottom: Spacing.medium,
  },
  subtitle: {
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-regular"],
    marginBottom: Spacing.medium,
  },
  checkButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: Spacing.medium,
  },
  checkButtonText: {
    color: "white",
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-bold"],
    textAlign: "center",
  },
});

export default SymptomsChecker;
