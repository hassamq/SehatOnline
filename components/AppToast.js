import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { FontAwesome } from "react-native-vector-icons/FontAwesome";

const AppToast = ({ message, success }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 2000);
    });
  }, []);

  const renderIcon = () => {
    if (success) {
      return <FontAwesome name="check" size={24} color="green" />;
    } else {
      return <FontAwesome name="times" size={24} color="red" />;
    }
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.content}>
        {renderIcon()}
        <Text style={styles.message}>{message}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  message: {
    marginLeft: 8,
  },
});

export default AppToast;
