import { useNavigation } from '@react-navigation/native'
import React, { useState, useContext, useRef } from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { colors } from '../../../../constants'
import { auth } from '../../../../firebase'
import { LanguageContext, useTranslation } from '../../../Localization/Translations';
import SettingsHeader from './SettingsHeader'
import Options from './Options'

const SettingsPage = () => {
    const { lang, signOut } = useTranslation()
    const [chosenTheme, setchosenTheme] = useState('Default')
    const [chosenCurrency, setchosenCurrency] = useState('₽')

    const {
        setAppLanguage,
        appLanguage
    } = useContext(LanguageContext);

    const langs = ['Russian', 'English', 'Cancel']
    const themes = ['Default', 'Dark', 'Cancel']
    const currency = ['₽', '$', '₴', 'Cancel']

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
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <SettingsHeader />
            <Text style={styles.optionsName}>Приложение</Text>
            <Options title={lang} chosen={appLanguage} info={langs} funcToSubmit={setAppLanguage} />
            <Options title='Theme' chosen={chosenTheme} info={themes} funcToSubmit={setchosenTheme} />
            <Options title='Currency' chosen={chosenCurrency} info={currency} cancelIndex={3} funcToSubmit={setchosenCurrency} />
            <Text style={styles.optionsName}>Безопасность</Text>
            <Text>Смена пароля</Text>
            <Text>Смена электронной почты</Text>


            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.buttonSignOut}
            >
                <Text style={styles.buttonText}>{signOut}</Text>
            </TouchableOpacity>
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
    text: {
        color: "black"
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
