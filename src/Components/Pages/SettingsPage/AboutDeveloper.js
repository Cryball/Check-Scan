import React, { useState } from 'react'
import { Image, Linking, Text, TouchableHighlight, View, TextInput, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native'
import { colors } from '../../../../constants'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'

const AboutDeveloper = () => {
    const navigation = useNavigation()

    return (
        <LinearGradient colors={[colors.MAIN_GREEN, '#68BA8E',]} style={{ flex: 1 }}>
            <View>
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
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: '700' }}>О разработчиках</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>
                        Нашли ошибку? Обязательно напишите на почту cryball44@gmail.com! Спасибо, что помогаете нам!
                    </Text>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    text: { color: "white", fontWeight: "bold", textAlign: "center", fontSize: 20, },
    input: {
        flex: 1,
        height: 40,
        width: '100%',
        marginRight: 30,
        padding: 10,
        color: '#FFFBFB',
        backgroundColor: colors.LIGHT_GREEN,
        fontWeight: '700',
    },
    textInput: {
        borderWidth: 1,
        backgroundColor: colors.LIGHT_GREEN,
        borderColor: "gray",
        marginVertical: 20,
        padding: 10,
        height: 40,
        fontSize: 18,
        color: '#FFFBFB',
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#F6F0F0',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        width: '55%',
        borderColor: "gray",
        borderWidth: 1,
    },
    buttonText: {
        color: colors.TEXT_GRAY,
        fontWeight: '700',
        fontSize: 16,
    },
})

export default AboutDeveloper
