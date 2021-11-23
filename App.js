import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './src/Navigation/Navigation';
import AutorizPage from './src/Components/Pages/AutorizPage/AutorizPage';
import { LanguageContextProvider } from './src/Localization/Translations';
import CurrentShopBills from './src/Components/Pages/CurrentShopBills/CurrentShopBills';
import ChangePassword from './src/Components/Pages/SettingsPage/ChangePassword';
import ChangeEmail from './src/Components/Pages/SettingsPage/ChangeEmail';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import AboutDeveloper from './src/Components/Pages/SettingsPage/AboutDeveloper';
import ForgotPassword from './src/Components/Pages/AutorizPage/ForgotPassword';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LanguageContextProvider>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={AutorizPage} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={MyTabs} />
          <Stack.Screen options={{ headerShown: false }} name="CurrentShopBills" component={CurrentShopBills} />
          <Stack.Screen options={{ headerShown: false }} name="changePassword" component={ChangePassword} />
          <Stack.Screen options={{ headerShown: false }} name="changeEmail" component={ChangeEmail} />
          <Stack.Screen options={{ headerShown: false }} name="aboutDeveloper" component={AboutDeveloper} />
          <Stack.Screen options={{ headerShown: false }} name="forgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </LanguageContextProvider>
    </NavigationContainer>
  );
}


