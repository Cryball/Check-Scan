import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './src/Navigation/Navigation';
import AutorizPage from './src/Components/Pages/AutorizPage/AutorizPage';
import { LanguageContextProvider } from './src/Localization/Translations';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LanguageContextProvider>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={AutorizPage} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={MyTabs} />
        </Stack.Navigator>
      </LanguageContextProvider>
    </NavigationContainer>
  );
}


