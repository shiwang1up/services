import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

const {width: screenWidth} = Dimensions.get('window');

const data = [
  {
    title: 'We Provide Professional Home services',
    image: require('../assets/service1.png'),
  },
  {
    title: 'Easy Service booking & Scheduling',
    image: require('../assets/service2.png'),
  },
  {
    title: 'Get Personal Grooming at Home',
    image: require('../assets/service3.png'),
  },
];

const OnboardingSwiper = ({navigation}) => {
  if (!data || data.length === 0) {
    return <Text>No onboarding data available!</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topcard}>
        <TouchableOpacity
          style={styles.buttonTop}
          onPress={() => navigation.replace('Login')}>
          <Text style={styles.buttonTextTop}>Skip</Text>
        </TouchableOpacity>
      </View>
      <Swiper
        showsPagination={true}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        loop={false}>
        {data.map((item, index) => (
          <View style={styles.card} key={index}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </Swiper>
      <View style={styles.bottomcard}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Login')}>
          <Text style={styles.buttonText}>&gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  bottomcard: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topcard: {
    flex: 0,
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Space out items
    alignItems: 'center', // Center items vertically
  },
  buttonTop: {
    // backgroundColor: '#283891',
    backgroundColor: '#c4e1f6',
    borderRadius: 30,
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto', // Push the button to the right
  },
  buttonTextTop: {
    color: '#283891',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:70,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 20,
    borderWidth: 15,
    borderColor: '#c4e1f6',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#283891',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    height: 50,
    width: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: '#ddd',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#0056F7',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default OnboardingSwiper;
