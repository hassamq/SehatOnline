import React, { useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert,ActivityIndicator } from "react-native";
import api from "../../api/api";
import Colors from "../../Constants/colors";
import Spacing from "../../Constants/spacing";
import FontSize from "../../Constants/FontSize";
import Fonts from "../../Constants/Fonts";
import Header from "../../components/Header"
import { ScrollView } from "react-native-gesture-handler";

const SymptomsChecker = () => {
  const title = "AI Checker";
  const previosScreen = null;
  const [symptoms, setSymptoms] = useState([]);
  const [diagnosis, setDiagnosis] = useState("");
  const [loading,setLoading]=useState("")

  const addSymptomField = () => {
    setSymptoms((prevSymptoms) => [...prevSymptoms, ""]);
  };

  const removeSymptomField = (index) => {
    setSymptoms((prevSymptoms) => prevSymptoms.filter((_, i) => i !== index));
  };

  const handleSymptomChange = (value, index) => {
    setSymptoms((prevSymptoms) => {
      const updatedSymptoms = [...prevSymptoms];
      updatedSymptoms[index] = value;
      return updatedSymptoms;
    });
  };

  const handleCheckSymptoms = async () => {
    try {
      
      setLoading(true);
      // Send the symptoms data to the backend for AI processing
      const response = await api.checkSymptoms(symptoms);

      // Process the AI response
      // Update the diagnosis state with the response
      setDiagnosis(response.reply);
      setLoading(false);
    } catch (error) {
      console.error("Error checking symptoms:", error);
      // Handle the error gracefully
      Alert.alert("Error", "An error occurred while checking symptoms.");
    }
  };

  return (
    <>
      <Header data={title} pre={previosScreen} />
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Symptoms Checker</Text>
        <Text style={styles.subtitle}>Enter the symptoms you're experiencing:</Text>

        {symptoms.map((symptom, index) => (
          <View key={index} style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={symptom}
              onChangeText={(value) => handleSymptomChange(value, index)}
              placeholder="Symptom"
              placeholderTextColor={Colors.gray}
            />
            <TouchableOpacity onPress={() => removeSymptomField(index)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.addButton} onPress={addSymptomField}>
          <Text style={styles.addButtonText}>Add Symptom</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.checkButton} onPress={handleCheckSymptoms}>
          <Text style={styles.checkButtonText}>Check Symptoms</Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator style={styles.activityIndicator} color={Colors.primary} size="large" />
        ) : null}

        {diagnosis ? (
          <Text style={styles.diagnosisText}>Diagnosis: {diagnosis}</Text>
        ) : null}
      </View>
      </ScrollView>

    </>
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
    marginBottom: Spacing,
  },
  subtitle: {
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-regular"],
    marginBottom: Spacing.medium,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing,
  },
  input: {
    flex: 1,
    borderWidth: 0.75,
    borderColor: Colors.primary,
    borderRadius: 10,
    padding: 8,
    marginRight: Spacing.small,
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-regular"],
  },
  removeButton: {
    backgroundColor: Colors.primary,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginLeft: 10,
  },
  removeButtonText: {
    color: "white",
    fontSize: FontSize.small,
    fontFamily: Fonts["poppins-regular"],
  },
  addButton: {
    backgroundColor: "orange",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: Spacing,
  },
  addButtonText: {
    color: "black",
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-bold"],
    textAlign: "center",
  },
  checkButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: Spacing,
  },
  checkButtonText: {
    color: "white",
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-bold"],
    textAlign: "center",
  },
  diagnosisText: {
    marginTop: Spacing,
    fontSize: FontSize.medium,
    fontFamily: Fonts["poppins-regular"],
  },
  activityIndicator: {
    marginTop: Spacing*2,
  },
});

export default SymptomsChecker;
