import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

const BookingsPage = () => {
  // Sample dynamic data for bookings
  const [bookingData, setBookingData] = useState([]);

  // Fetch booking data (could be from an API)
  useEffect(() => {
    const fetchBookingData = async () => {
      const data = [
        {
          date: '22nd \nNov, Tuesday',
          serviceProvider: 'Salon for Woman',
          services: ['Diamond Facial', 'Cleanup'],
        },
      ];
      setBookingData(data);
    };
    fetchBookingData();
  }, []);

  const renderBookingItem = ({item}) => (
    <View style={styles.bookingCard}>
      <View style={styles.bookingHeader}>
        <Text style={styles.bookingDate}>{item.date}</Text>
        <Text style={styles.serviceProvider}>{item.serviceProvider}</Text>
      </View>
      <FlatList
        data={item.services}
        renderItem={({item}) => (
          <View style={styles.serviceItem}>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.service}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.bookingActions}>
        <TouchableOpacity style={styles.rescheduleButton}>
          <Text style={styles.buttonText}>Reschedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewDetailsButton}>
          <Text style={styles.buttonTextDetails}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Upcoming</Text>
        <Text style={styles.tab}>Previous</Text>
      </View>

      {bookingData.length > 0 ? (
        <FlatList
          data={bookingData}
          renderItem={renderBookingItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={styles.noBookings}>No bookings available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tab: {
    fontSize: 16,
    padding: 10,
    color: '#000',
  },
  activeTab: {
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  bookingCard: {
    backgroundColor: '#e5eafe',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  bookingDate: {
    fontSize: 18,
    fontWeight: '500',
  },
  serviceProvider: {
    fontSize: 18,
    color: '#555',
  },
  service: {
    fontSize: 14,
    marginBottom: 8,
  },
  bookingActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rescheduleButton: {
    backgroundColor: '#283891',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  viewDetailsButton: {
    backgroundColor: 'transparent',
    paddingVertical: 14,
    paddingHorizontal: 4,
    borderRadius: 10,
  },

  buttonTextDetails: {
    color: '#283891',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
  noBookings: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    fontSize: 16,
    color: '#000',
  },
  activeNavItem: {
    color: 'blue',
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    fontSize: 20,
    color: '#000',
    marginRight: 8,
    lineHeight: 20,
  },
});

export default BookingsPage;
