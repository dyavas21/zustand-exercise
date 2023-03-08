import MainScreen from './src/screens/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/screens/DetailScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='MainScreen' component={MainScreen} />
        <Stack.Screen name='DetailScreen' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
