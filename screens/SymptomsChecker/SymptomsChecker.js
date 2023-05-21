import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../components/Header";

const SymptomsChecker = () => {
  const title = "Symptoms Chat";
  const previosScreen = null;
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState('');

  const checkSymptoms = () => {
    // Perform your symptoms checking logic here
    // Based on the symptoms, determine the result

    // Example logic:
    if (symptoms.includes('fever') && symptoms.includes('cough')) {
      setResult('Possible flu');
    } else if (symptoms.includes('shortness of breath')) {
      setResult('Possible respiratory issue');
    } else {
      setResult('No specific condition detected');
    }
  };
  return (
    <View>
      <Header data={title} pre={previosScreen} />
      <View style={{ paddingBottom: 300 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
        <View>
      <Text>Enter your symptoms:</Text>
      <TextInput
        onChangeText={text => setSymptoms(text)}
        value={symptoms}
        placeholder="e.g., fever, cough"
      />
      <Button title="Check Symptoms" onPress={checkSymptoms} />
      {result ? <Text>Result: {result}</Text> : null}
    </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SymptomsChecker;

const styles = StyleSheet.create({});
