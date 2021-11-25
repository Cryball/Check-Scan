import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './src/Navigation/Navigation';
import AutorizScreen from './src/Components/Screens/AutorizScreen/AutorizScreen';
import { LanguageContextProvider } from './src/Localization/Translations';
import CurrentShopBillsScreen from './src/Components/Screens/CurrentShopBills/CurrentShopBills';
import ChangePassword from './src/Components/Screens/SettingsScreen/ChangePassword';
import ChangeEmail from './src/Components/Screens/SettingsScreen/ChangeEmail';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import AboutDeveloper from './src/Components/Screens/SettingsScreen/AboutDeveloper';
import ForgotPassword from './src/Components/Screens/AutorizScreen/ForgotPassword';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LanguageContextProvider>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={AutorizScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={MyTabs} />
          <Stack.Screen options={{ headerShown: false }} name="CurrentShopBills" component={CurrentShopBillsScreen} />
          <Stack.Screen options={{ headerShown: false }} name="changePassword" component={ChangePassword} />
          <Stack.Screen options={{ headerShown: false }} name="changeEmail" component={ChangeEmail} />
          <Stack.Screen options={{ headerShown: false }} name="aboutDeveloper" component={AboutDeveloper} />
          <Stack.Screen options={{ headerShown: false }} name="forgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </LanguageContextProvider>
    </NavigationContainer>
  );
}


