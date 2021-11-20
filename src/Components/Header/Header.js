import React, { useState } from 'react'
import { Image, Linking, Text, TouchableHighlight, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../../../constants'
import { auth } from '../../../firebase'
import FilterCategory from './FilterCategory'
import Search from './Search'
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from '../../Localization/Translations'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const { goodMorning, goodAfternoon, goodEvening, goodNight, calendar, purchaseHistory } = useTranslation()

    const Meeting = () => {
        const userName = auth.currentUser?.email
        const date = new Date()
        const currHour = date.getHours()
        console.log(currHour)
        if ((currHour >= 6) & (currHour <= 12)) {
            return <Text style={stylesCreated.meeting}>{goodMorning}, {userName}!</Text>
        }
        else if ((currHour >= 13) & (currHour <= 17)) {
            return <Text style={stylesCreated.meeting}>{goodAfternoon}, {userName}!</Text>
        }
        else if ((currHour >= 18) & (currHour <= 22)) {
            return <Text style={stylesCreated.meeting}>{goodEvening}, {userName}!</Text>
        }
        else if ((currHour >= 23) & (currHour <= 5)) {
            return <Text style={stylesCreated.meeting}>{goodNight}, {userName}!</Text>
        }
    }

    const navigation = useNavigation()

    return (
        <LinearGradient colors={[colors.MAIN_GREEN, '#68BA8E',]}>
            <View style={{
                padding: 24,
                paddingTop: 30,
                paddingBottom: 25,
                //backgroundColor: colors.MAIN_GREEN,
            }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 12,
                    }}
                >
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Settings")}
                        >
                            <Meeting />

                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{
                            paddingTop: 20, paddingBottom: 20
                        }} onPress={() => navigation.navigate("Settings")}>
                            <Image
                                source={
                                    require('../../images/right-arrow.png')
                                }
                                style={{
                                    width: 14,
                                    height: 20,
                                    marginLeft: 5

                                }}
                                tintColor='white'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Search />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 10,
                }}>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: '700', }}>{purchaseHistory}</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#F4E2E2', fontSize: 17, fontWeight: '500', }}>{calendar} </Text>
                    </TouchableOpacity>


                </View>
                <FilterCategory />
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

export default Header
