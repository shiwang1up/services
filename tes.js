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
    name: 'AC Regular Service',
    price: '₹599 onwards',
    image: require('./assets/ac_service/ac_regular_service.jpg'), // Add your image here
  },
  {
    id: 2,
    name: 'AC Installation',
    price: '₹499 onwards',
    image: require('./assets/ac_service/ac_installation.jpg'), // Add your image here
  },
  {
    id: 3,
    name: 'AC Repair',
    price: '₹499 onwards',
    image: require('./assets/ac_service/ac_repair.jpg'), // Add your image here
  },
  {
    id: 4,
    name: 'AC Uninstallation',
    price: '₹59 onwards',
    image: require('./assets/ac_service/ac_uninstallation.jpg'), // Add your image here
  },
];

const ACServicesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>AC Services</Text>
      <FlatList
        data={acServices}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.serviceCard}>
            <View style={styles.serviceItem}>
              <Image source={item.image} style={styles.serviceImage} />
            </View>
            <View style={styles.serviceTextBinder}>
              <Text style={styles.serviceName}>{item.name}</Text>
              <Text style={styles.servicePrice}>{item.price}</Text>
            </View>
          </View>
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
  serviceItem: {
    flex: 1,
    alignItems: 'center',
  },
  serviceCard:{
    flex: 1,
    margin: 8,
    alignItems: 'left',
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
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
  },
  serviceName: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  servicePrice: {
    fontSize: 12,
    color: '#283891',
    fontWeight: '600',
  },
});

export default ACServicesScreen;
