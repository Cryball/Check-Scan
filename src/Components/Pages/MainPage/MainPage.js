import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MyTabs from "../../../Navigation/Navigation";
import Header from '../../Header/Header';


function MainPage() {
    return (
        <View>
            <View>
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
            </View>
            <MyTabs />
        </View>
    );
}

export default MainPage
