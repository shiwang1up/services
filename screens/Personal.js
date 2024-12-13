import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const acServices = [
  {
    id: 1,
    name: 'Facial for glow',
    price: '₹599 onwards',
    image: require('../assets/personal/facial.png'),
  },
  {
    id: 2,
    name: 'Manicure',
    price: '₹499 onwards',
    image: require('../assets/personal/manicure.png'),
  },
  {
    id: 3,
    name: 'Pedicure',
    price: '₹499 onwards',
    image: require('../assets/personal/pedicure.png'),
  },
  {
    id: 4,
    name: 'Threading',
    price: '₹59 onwards',
    image: require('../assets/personal/threading.png'),
  },
];

const Personal = ({navigation}) => {
  const handleServicePress = service => {
    if (service.id === 0) {
      navigation.navigate('ACRegularServices'); // Navigate to the ACRegularServicesScreen
    }
    // Handle navigation for other services if needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salon for Women</Text>
      <FlatList
        data={acServices}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.serviceCard}
            onPress={() => handleServicePress(item)}>
            <View style={styles.serviceItem}>
              <Image source={item.image} style={styles.serviceImage} />
            </View>
            <View style={styles.serviceTextBinder}>
              <Text style={styles.serviceName}>{item.name}</Text>
              <Text style={styles.servicePrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    color: '#0056F7',
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    justifyContent: 'center',
    
  },
  serviceCard: {
    flex: 1,
    margin: 8,
    alignItems: 'left',
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingBottom:20,

  },
  serviceItem: {
    alignItems: 'center',
  },
  serviceImage: {
    width: 160,
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
  },
  serviceTextBinder: {
    flex: 0,
    textAlign: 'left',
    marginLeft:10,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    marginTop:4,
  },
  servicePrice: {
    fontSize: 13,
    color: '#283891',
    fontWeight: '600',
  },
});

export default Personal;
