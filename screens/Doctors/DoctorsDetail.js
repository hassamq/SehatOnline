import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native'
import React from 'react'
import Header from "../../components/Header";

const DoctorsDetail = () => {
    const title = "Doctor Detail";
    const previosScreen="Doctors"
    return (
        <View>
          <Header data={title} pre={previosScreen} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DoctorsDetail");
            }}
          >
            <Text>Doctors Detail</Text>
          </TouchableOpacity>
        </View>
      );
}

export default DoctorsDetail

const styles = StyleSheet.create({})