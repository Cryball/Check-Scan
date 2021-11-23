import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableHighlight, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native'
import { colors, data } from '../../../../constants';
import { LinearGradient } from 'expo-linear-gradient';

const CurrentShopBillsHeader = () => {
    const navigation = useNavigation()
    return (
        <LinearGradient colors={[colors.MAIN_GREEN, '#68BA8E',]}>
            <View style={{
                padding: 24,
                paddingTop: 30,
                paddingBottom: 25,
                flexDirection: 'row',
                //justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 10,
            }}>
                <TouchableOpacity style={{
                    paddingTop: 20, paddingBottom: 20,
                }} onPress={() => navigation.goBack()}>
                    <Image
                        source={
                            require('../../../images/right-arrow.png')
                        }
                        style={{
                            width: 14,
                            height: 20,
                            padding: 15,
                            paddingLeft: 20,
                            transform: [{ rotate: "180deg" }]

                        }}
                        tintColor='white'
                    />
                </TouchableOpacity>
                <View style={{ width: '80%', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: '700' }}>Покупка</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

export default CurrentShopBillsHeader