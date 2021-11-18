import React, { useState } from 'react'
import { Image, Linking, Text, TouchableHighlight, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../../../constants'
import { auth } from '../../../firebase'
import FilterCategory from './FilterCategory'
import Search from './Search'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

const Meeting = () => {
    const userName = auth.currentUser?.email
    const date = new Date()
    const currHour = date.getHours()
    if ((currHour >= 6) & (currHour <= 12)) {
        return <Text style={stylesCreated.meeting}>Доброе утро, {userName}!</Text>
    }
    else if ((currHour >= 13) & (currHour <= 17)) {
        return <Text style={stylesCreated.meeting}>Добрый день, {userName}!</Text>
    }
    else if ((currHour >= 18) & (currHour <= 22)) {
        return <Text style={stylesCreated.meeting}>Добрый вечер, {userName}!</Text>
    }
    else {
        return <Text style={stylesCreated.meeting}>Доброй ночи, {userName}!</Text>
    }
}

const Header = () => {

    return (
        <LinearGradient colors={[colors.MAIN_GREEN, '#68BA8E',]}>
            <View style={{
                padding: 24,
                paddingTop: 25,
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
                        <TouchableHighlight
                        // onPress={() => Linking.openURL('https://google.com')}
                        >
                            <Meeting />

                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight>
                            <Image
                                source={
                                    require('./right-arrow.png')
                                }
                                style={{
                                    width: 14,
                                    height: 20,
                                    marginLeft: 5

                                }}
                                tintColor='white'
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                <Search />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 10,
                }}>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: '700', }}>История покупок</Text>
                    <TouchableHighlight>
                        <Text style={{ color: '#F4E2E2', fontSize: 17, fontWeight: '500', }}>Календарь</Text>
                    </TouchableHighlight>


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
