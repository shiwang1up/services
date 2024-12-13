import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  // State to store profile data and options
  const [profileData, setProfileData] = useState({
    name: 'John Kevin',
    phone: '+91 1234567890',
    imageUri: require('../assets/profile/profile.png'), // Use require for local assets
  });

  const [options, setOptions] = useState([
    {
      icon: 'map-marker',
      text: 'Manage Address',
      action: () => console.log('Manage Address clicked'),
    },
    {
      icon: 'share',
      text: 'Refer & Earn',
      action: () => console.log('Refer & Earn clicked'),
    },
    {
      icon: 'star',
      text: 'Rate Us',
      action: () => console.log('Rate Us clicked'),
    },
    {
      icon: 'information-outline',
      text: 'About mHome Services',
      action: () => console.log('About mHome Services clicked'),
    },
    {
      icon: 'logout',
      text: 'Logout',
      action: () => console.log('Logout clicked'),
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileHeader}>
        <Image
          source={profileData.imageUri}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>{profileData.name}</Text>
          <Text style={styles.profilePhone}>{profileData.phone}</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Icon name="pencil" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={option.action}>
          <Icon name={option.icon} size={20} color="black" />
          <Text style={styles.optionText}>{option.text}</Text>
          <Icon name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    marginBottom: 24,
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
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
    backgroundColor: '#283891',
    borderRadius: 12,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#E0E0E0',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
  },
});

export default ProfileScreen;
