import React, { useState } from 'react'
import { Image, Linking, Text, TouchableHighlight, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../../constants'
import Search from '../../Header/Search';
import { useTranslation } from '../../../Localization/Translations';

const DiagramHeader = () => {
    const { costAnalysis } = useTranslation()
    return (
        <LinearGradient colors={[colors.MAIN_GREEN, '#68BA8E',]}>
            <View style={{
                padding: 24,
                paddingTop: 30,
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
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: '700', }}>{costAnalysis}</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

export default DiagramHeader
