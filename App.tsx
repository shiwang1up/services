import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import OnboardingSwiper from './OnboardingSwiper';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import CategoriesScreen from './CategoriesScreen ';
import ACServicesScreen from './ACServicesScreen';
import ACRegularServicesScreen from './ACRegularServicesScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000); // Splash screen duration: 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Onboarding Screen */}
        <Stack.Screen name="Onboarding" component={OnboardingSwiper} />
        {/* Login Screen */}
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Home Screen */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen name="ACServicesScreen" component={ACServicesScreen} />
        <Stack.Screen name="ACRegularServices" component={ACRegularServicesScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
