import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { colors } from './constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './src/Navigation/Navigation';
import Header from './src/Components/Header/Header';
import AutorizPage from './src/Components/Pages/AutorizPage/AutorizPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={AutorizPage} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


{/* <View>
<LinearGradient colors={['#B8DBB5', '#68BA8E',]}>
  <View
    style={{
      padding: 24,
      paddingTop: 25,
      paddingBottom: 25,
      //backgroundColor: colors.MAIN_GREEN,
    }}
  >
    <Header />
  </View>
</LinearGradient>
</View> */}


