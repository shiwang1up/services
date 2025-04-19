import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ServiceDetails = ({navigation}) => {
  // State for dynamic data
  const [selectedService, setSelectedService] = useState(null);
  const [relatedServices, setRelatedServices] = useState([]);

  // Fetching data dynamically
  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      // Example fetched data
      const fetchedSelectedService = {
        id: 1,
        name: 'AC Repair',
        rating: 4.8,
        ratingCount: '23k',
        jobsCompleted: 394,
        price: '₹699',
        description: [
          '45 mins',
          'AC Repair for Regular Services.',
          '6-step Process. Includes 10-min massage.',
        ],
      };

      const fetchedRelatedServices = [
        {
          id: 2,
          name: 'Facial Name 2',
          price: '₹499',
          oldPrice: '₹599',
          description: ['45 mins', '6-step Process. Includes 10-min massage.'],
          image: 'https://example.com/service-image-2.jpg',
        },
        {
          id: 3,
          name: 'Facial Name 3',
          price: '₹499',
          oldPrice: '₹599',
          description: ['45 mins', '6-step Process. Includes 10-min massage.'],
          image: 'https://example.com/service-image-3.jpg',
        },
      ];

      // Set state
      setSelectedService(fetchedSelectedService);
      setRelatedServices(fetchedRelatedServices);
    };

    fetchData();
  }, []);

  if (!selectedService) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{uri: 'https://example.com/ac-repair-image.jpg'}} // Replace with actual image URL
          style={styles.headerImage}
        />
        <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Service Title */}
        <Text style={styles.title}>{selectedService.name}</Text>
        <Text style={styles.subtext}>
          ⭐ {selectedService.rating} ({selectedService.ratingCount}) |{' '}
          {selectedService.jobsCompleted} jobs completed
        </Text>

        {/* Selected Services */}
        <View style={styles.selectedServices}>
          <Text style={styles.sectionTitle}>Selected Services</Text>
          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>{selectedService.name}</Text>
            <Text style={styles.price}>{selectedService.price}</Text>
            {selectedService.description.map((desc, index) => (
              <Text key={index} style={styles.description}>
                - {desc}
              </Text>
            ))}
          </View>
        </View>

        {/* Related Services */}
        <Text style={styles.sectionTitle}>Related Services</Text>
        <View>
          {relatedServices.map(service => (
            <View key={service.id} style={styles.relatedServiceCard}>
              <Image
                source={{uri: service.image}}
                style={styles.relatedServiceImage}
              />
              <View style={styles.relatedServiceDetails}>
                <Text style={styles.serviceTitle}>{service.name}</Text>
                <Text style={styles.price}>
                  {service.price}{' '}
                  <Text style={styles.oldPrice}>{service.oldPrice}</Text>
                </Text>
                {service.description.map((desc, index) => (
                  <Text key={index} style={styles.description}>
                    - {desc}
                  </Text>
                ))}
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addText}>+ Add</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      {/* Footer Button */}
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerButtonText}>View Summary</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {position: 'relative'},
  headerImage: {width: '100%', height: 200},
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {padding: 16},
  title: {fontSize: 24, fontWeight: 'bold'},
  subtext: {fontSize: 14, color: 'gray', marginBottom: 16},
  sectionTitle: {fontSize: 18, fontWeight: 'bold', marginVertical: 16},
  selectedServices: {backgroundColor: '#f5f5f5', borderRadius: 8, padding: 16},
  serviceCard: {marginBottom: 16},
  serviceTitle: {fontSize: 16, fontWeight: 'bold'},
  price: {fontSize: 16, color: 'green', marginVertical: 4},
  oldPrice: {textDecorationLine: 'line-through', color: 'gray'},
  description: {fontSize: 14, color: 'gray'},
  relatedServiceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  relatedServiceImage: {width: 80, height: 80, borderRadius: 8},
  relatedServiceDetails: {flex: 1, marginLeft: 12},
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  addText: {color: '#fff', fontWeight: 'bold'},
  footerButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    alignItems: 'center',
    margin: 16,
    borderRadius: 8,
  },
  footerButtonText: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
});

export default ServiceDetails;
