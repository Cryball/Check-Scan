import React, { useState } from 'react'
import { Image, Linking, Text, TouchableHighlight, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../../constants'
import Search from '../../Header/Search';

const SettingsHeader = () => {

    return (
        <LinearGradient colors={[colors.MAIN_GREEN, '#68BA8E',]}>
            <View style={{
                padding: 24,
                paddingTop: 25,
                paddingBottom: 25,
                //backgroundColor: colors.MAIN_GREEN,
            }}>
                <Search />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 10,
                }}>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: '700', }}>Настройки</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

const stylesCreated = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    meeting: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
    }
})

export default SettingsHeader
