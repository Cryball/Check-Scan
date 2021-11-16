import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { colors } from './constants';
import Footer from './src/Components/Footer/Footer';
import Header from './src/Components/Header/Header';
import PurchaseHistory from './src/Components/Purchase history/PurchaseHistory';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/Navigation/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsPage from './src/Components/Pages/SettingsPage/SettingsPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View
        style={{
          padding: 24,
          paddingTop: 55,
          paddingBottom: 30,
          backgroundColor: colors.MAIN_GREEN,
        }}
      >
        <Header />
      </View>
      {/* <View style={{ backgroundColor: '#C4C4C4' }}>
        <PurchaseHistory />
      </View> */}
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingBottom: 10,
  },
});

