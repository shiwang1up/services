import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import ACServicesScreen from '../screens/ACServicesScreen';
import ACRegularServicesScreen from '../screens/ACRegularServicesScreen';
import BookingsScreen from '../screens/BookingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CategoriesScreen from '../screens/CategoriesScreen ';
import BookingsPage from '../screens/BookingsScreen';
import Personal from '../screens/Personal';
import ServiceDetails from '../screens/ServiceDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home Stack (to include AC services)
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="ACServicesScreen" component={ACServicesScreen} />
 
    <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
    <Stack.Screen name="ACRegularServices" component={ACRegularServicesScreen} />
    <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
  </Stack.Navigator>
);

// App Navigator with Bottom Tabs
const AppNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            height: 60,
            paddingBottom: 10,
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#ddd',
          },
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Personal') iconName = 'account';
            else if (route.name === 'Bookings') iconName = 'calendar';
            else if (route.name === 'Profile') iconName = 'account-circle';
  
            return (
              <Icon
                name={iconName}
                size={30}
                color={focused ? '#283891' : '#C0C0C0'} // Selected icon color #283891, unselected color #C0C0C0
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 12, // Adjust label font size
            marginTop: 4, // Space between icon and text
          },
          tabBarActiveTintColor: '#283891', // Active label color
          tabBarInactiveTintColor: '#C0C0C0', // Inactive label color
        })}
      >
        {/* Bottom Tabs */}
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Personal" component={Personal} />
        <Tab.Screen name="Bookings" component={BookingsPage} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };
  
  export default AppNavigator;