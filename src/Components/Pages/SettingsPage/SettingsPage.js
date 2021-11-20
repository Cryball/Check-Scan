import { useNavigation } from '@react-navigation/native'
import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { colors } from '../../../../constants'
import { auth } from '../../../../firebase'
import { LanguageContext, useTranslation } from '../../../Localization/Translations';
import SettingsHeader from './SettingsHeader'
import { LinearGradient } from 'expo-linear-gradient'

const langs = ['en', 'ru'];

const SettingsPage = () => {
    const { changeLang, signOut } = useTranslation()
    const {
        setAppLanguage,
    } = useContext(LanguageContext);
    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate("Login")
            })
            .catch(error => alert(error.message))
    }
    //console.log(lang, "chosen lang")
    return (
        <LinearGradient colors={[colors.MAIN_GREEN, '#68BA8E',]} style={{ flex: 1 }}>
            <View style={{
                padding: 24,
                paddingTop: 30,
                paddingBottom: 25,
            }}>
                <SettingsHeader />
                <View style={{ paddingTop: 20 }}>
                    <Text style={styles.language}>
                        {changeLang}
                    </Text>

                    <FlatList
                        data={langs}
                        renderItem={(item) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    setAppLanguage(item.item);
                                }}>
                                    <Text style={styles.text}>{item.item}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </View>
                <TouchableOpacity
                    onPress={handleSignOut}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>{signOut}</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F6F0F0',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: colors.MAIN_GREEN,
        borderWidth: 3,
        marginBottom: 10,
        width: '55%'
    },
    buttonText: {
        color: colors.TEXT_GRAY,
        fontWeight: '700',
        fontSize: 16,
    },
    language: {
        paddingTop: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
        // textAlign: 'center',
    },
    text: {
        color: "white"
    }
})

export default SettingsPage
