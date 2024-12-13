import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import OnboardingSwiper from './screens/OnboardingSwiper';
import LoginScreen from './screens/LoginScreen';
import AppNavigator from './navigation/AppNavigator'; // Bottom Tab Navigator

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
    return <SplashScreen />; // Show splash screen for 3 seconds
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Conditional Screens */}
        <Stack.Screen name="Onboarding" component={OnboardingSwiper} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainApp" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
