import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainNavigator from './navigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}


