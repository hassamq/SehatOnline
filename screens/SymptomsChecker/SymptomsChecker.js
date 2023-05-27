import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../components/Header";

const SymptomsChecker = () => {
  const title = "Symptoms Checker";
  const previousScreen = null;
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkSymptoms = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://apps.nlm.nih.gov/medlineplus/services/mpconnect_service.cfm?mainSearchCriteria=${symptoms}&knowledgeResponseType=text`,
        {
          method: "GET",
        }
      );

      const data = await response.text();
      console.log("Response:", data); // Log the response data

      // Parse and extract the relevant information from the response

      // Example logic:
      if (data.includes("flu") || data.includes("influenza")) {
        setResult('Possible flu');
      } else if (data.includes("respiratory")) {
        setResult('Possible respiratory issue');
      } else {
        setResult('No specific condition detected');
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <View>
      <Header data={title} pre={previousScreen} />
      <View style={styles.container}>
        <Text style={styles.label}>Enter your symptoms:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setSymptoms(text)}
          value={symptoms}
          placeholder="e.g., fever, cough"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={checkSymptoms}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>{isLoading ? 'Checking Symptoms...' : 'Check Symptoms'}</Text>
        </TouchableOpacity>
        {result ? <Text style={styles.result}>Result: {result}</Text> : null}
      </View>
    </View>
  );
};

export default SymptomsChecker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});