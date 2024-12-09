import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const isButtonDisabled = phoneNumber.length !== 10;

  const handleLogin = () => {
    navigation.replace('Home'); // Navigate to Home screen
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/logo_login.png')} // Replace with your logo URI
        style={styles.logo}
      />
      {/* <Text style={styles.title}>mHome Services</Text> */}
      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          maxLength={10}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <Text style={styles.otpInfo}>
        An OTP will be sent on the given phone number for verification. Standard
        message and data rates apply.
      </Text>
      <TouchableOpacity
        style={[styles.button, isButtonDisabled && styles.disabledButton]}
        disabled={isButtonDisabled}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Login/Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {

    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
    height: 50,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#3A3A3A',
  },
  input: {
    fontSize: 16,
    flex: 1,
    color: '#3A3A3A',
  },
  otpInfo: {
    fontSize: 12,
    color: '#888888',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#283891',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
