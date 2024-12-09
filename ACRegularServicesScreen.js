import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const regularServices = [
  {
    id: 1,
    name: 'Filter Cleaning',
    price: '₹199',
    image: require('./assets/ac_service/ac_regular_service.jpg'),
  },
  {
    id: 2,
    name: 'Gas Refilling',
    price: '₹399',
    image: require('./assets/ac_service/ac_installation.jpg'),
  },
  {
    id: 3,
    name: 'Coil Cleaning',
    price: '₹299',
    image: require('./assets/ac_service/ac_repair.jpg'),
  },
  {
    id: 4,
    name: 'Full Servicing',
    price: '₹499',
    image: require('./assets/ac_service/ac_uninstallation.jpg'),
  },
];

const ACRegularServicesScreen = ({navigation}) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleServiceSelection = serviceId => {
    setSelectedServices(
      prev =>
        prev.includes(serviceId)
          ? prev.filter(id => id !== serviceId) // Deselect if already selected
          : [...prev, serviceId], // Add to selection
    );
  };

  const handleProceed = () => {
    console.log('Selected Services:', selectedServices);
    // Add your "Proceed" button functionality here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>AC Regular Services</Text>
      <FlatList
        data={regularServices}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.serviceCard}>
            <View style={styles.serviceItem}>
              <Image source={item.image} style={styles.serviceImage} />
            </View>
            <Text style={styles.serviceName}>{item.name}</Text>
            <Text style={styles.servicePrice}>{item.price}</Text>
            <View style={styles.addButtonBox}>
              <TouchableOpacity
                style={[
                  styles.addButton,
                  selectedServices.includes(item.id) && styles.addedButton,
                ]}
                onPress={() => toggleServiceSelection(item.id)}>
                <Text
                  style={[
                    styles.addButtonText,
                    selectedServices.includes(item.id) && styles.addButtonText,
                  ]}>
                  {selectedServices.includes(item.id) ? '-' : '+'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={[
          styles.proceedButton,
          selectedServices.length === 0 && styles.disabledProceedButton,
        ]}
        onPress={handleProceed}
        disabled={selectedServices.length === 0}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>
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
  serviceName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  servicePrice: {
    fontSize: 14,
    color: '#283891',
    fontWeight: '600',
  },

  addButtonBox: {
    flex: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  addButton: {
    backgroundColor: '#283891',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 6,
    marginTop: 15,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addedButton: {
    backgroundColor: '#28A745',
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  proceedButton: {
    backgroundColor: '#283891',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
    width:'100%',
},
disabledProceedButton: {
    backgroundColor: '#CCCCCC',
},
proceedButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign:'center',
  },
});

export default ACRegularServicesScreen;
