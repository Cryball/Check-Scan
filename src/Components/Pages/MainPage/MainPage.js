import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MyTabs from "../../../Navigation/Navigation";
import Header from '../../Header/Header';
import PurchaseHistory from '../Purchase history/PurchaseHistory';


function MainPage() {
    return (
        <View>
            <View>
                <Header />
            </View>
            <View>
                <PurchaseHistory />
            </View>
        </View>
    );
}

export default MainPage
