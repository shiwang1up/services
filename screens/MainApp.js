import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import OnboardingSwiper from './OnboardingSwiper'; // Import the Swiper component
import LinearGradient from 'react-native-linear-gradient'; // Gradient background
import LoginScreen from './LoginScreen';


const MainApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to mHome Services</Text>

      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MainApp;
