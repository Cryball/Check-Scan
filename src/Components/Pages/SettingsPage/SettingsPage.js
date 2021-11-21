import { useNavigation } from '@react-navigation/native'
import React, { useState, useContext, useRef } from 'react'
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native'
import { colors } from '../../../../constants'
import { auth } from '../../../../firebase'
import { LanguageContext, useTranslation } from '../../../Localization/Translations';
import SettingsHeader from './SettingsHeader'
import Options from './Options'
import * as firebase from 'firebase';
import changePassword from './ChangePassword'

const SettingsPage = () => {
    const { lang, signOut, cancel, app, security, changeP, changeE, theme, currency } = useTranslation()

    const [chosenTheme, setchosenTheme] = useState('Default')
    const [chosenCurrency, setchosenCurrency] = useState('₽')

    const {
        setAppLanguage,
        appLanguage,
        initializeAppLanguage
    } = useContext(LanguageContext);

    initializeAppLanguage()

    const langsArr = ['Русский', 'English', cancel]
    const themesArr = ['Default', 'Dark', cancel]
    const currencyArr = ['₽', '$', '€', cancel]

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1, }}>
            <SettingsHeader />
            <View style={{ padding: 10 }}>
                <Text style={styles.optionsName}>{app}</Text>
                <Options title={lang} chosen={appLanguage} info={langsArr} funcToSubmit={setAppLanguage} />
                <Options title={theme} chosen={chosenTheme} info={themesArr} funcToSubmit={setchosenTheme} />
                <Options title={currency} chosen={chosenCurrency} info={currencyArr} cancelIndex={3} funcToSubmit={setchosenCurrency} />
                <Text style={styles.optionsName}>{security}</Text>

                <View style={styles.settingsRow}>
                    <TouchableOpacity style={{ width: '80%' }} onPress={() => navigation.navigate('changePassword')}>
                        <Text style={styles.language}>{changeP}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={
                                require('../../../images/right-arrow.png')
                            }
                            style={{
                                width: 14,
                                height: 14,
                                marginLeft: 10

                            }}
                            tintColor='black'
                        />
                    </View>
                </View>
                <View style={styles.settingsRow}>
                    <TouchableOpacity style={{ width: '80%' }} onPress={() => navigation.navigate('changeEmail')}>
                        <Text style={styles.language}>{changeE}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={
                                require('../../../images/right-arrow.png')
                            }
                            style={{
                                width: 14,
                                height: 14,
                                marginLeft: 10

                            }}
                            tintColor='black'
                        />
                    </View>
                </View>


                <TouchableOpacity
                    onPress={handleSignOut}
                    style={styles.buttonSignOut}
                >
                    <Text style={styles.buttonText}>{signOut}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonSignOut: {
        backgroundColor: '#F6F0F0',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: colors.MAIN_GREEN,
        borderWidth: 3,
        marginTop: 10,
        width: '55%'
    },
    buttonText: {
        color: colors.TEXT_GRAY,
        fontWeight: '700',
        fontSize: 16,
    },
    language: {
        paddingTop: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: '700'
        // textAlign: 'center',
    },
    settingsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    optionsName: {
        color: colors.TEXT_GRAY, fontSize: 15, fontWeight: '700',
        marginTop: 10
    },
})

export default SettingsPage
