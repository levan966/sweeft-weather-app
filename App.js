import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CurrentDayForcast from './components/CurrentDayForcast';
import SevenDayForecast from "./components/SevenDayForecast";
import MainNavigator from './navigation';
import image from './assets/1159905.jpg'



export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
      {/* <CurrentDayForcast /> */}
      {/* <SevenDayForecast /> */}
    </NavigationContainer>
  );
}


