import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with your profile image
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>John Kevin</Text>
          <Text style={styles.profilePhone}>+91 1234567890</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Icon name="pencil" size={20} color="#0056F7" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.option}>
        <Icon name="map-marker" size={20} color="#0056F7" />
        <Text style={styles.optionText}>Manage Address</Text>
        <Icon name="chevron-right" size={20} color="#C0C0C0" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Icon name="share" size={20} color="#0056F7" />
        <Text style={styles.optionText}>Refer & Earn</Text>
        <Icon name="chevron-right" size={20} color="#C0C0C0" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Icon name="star" size={20} color="#0056F7" />
        <Text style={styles.optionText}>Rate Us</Text>
        <Icon name="chevron-right" size={20} color="#C0C0C0" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Icon name="information-outline" size={20} color="#0056F7" />
        <Text style={styles.optionText}>About mHome Services</Text>
        <Icon name="chevron-right" size={20} color="#C0C0C0" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Icon name="logout" size={20} color="#0056F7" />
        <Text style={styles.optionText}>Logout</Text>
        <Icon name="chevron-right" size={20} color="#C0C0C0" />
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
  },
  profilePhone: {
    fontSize: 14,
    color: '#555555',
  },
  editButton: {
    marginLeft: 'auto',
    padding: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
  },
});

export default ProfileScreen;
