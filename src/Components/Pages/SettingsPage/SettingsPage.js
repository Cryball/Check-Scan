import { useNavigation } from '@react-navigation/native'
import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements';
import { colors } from '../../../../constants'
import { auth } from '../../../../firebase'
import { LanguageContext } from '../../../Localization/Translations';
import SettingsHeader from './SettingsHeader'

const langs = ['en', 'ru'];

const SettingsPage = () => {
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
        <View>
            <SettingsHeader />
            <Text>It is a settings page</Text>
            <View>
                <Text style={styles.language}>
                    Change Language
                </Text>

                <FlatList
                    data={langs}
                    renderItem={(item) => {
                        //console.log(item.item)
                        return (
                            <TouchableOpacity onPress={() => {
                                setAppLanguage(item.item);
                            }}>
                                <Text>{item.item}</Text>
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
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
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
        textAlign: 'center',
    },
})

export default SettingsPage
