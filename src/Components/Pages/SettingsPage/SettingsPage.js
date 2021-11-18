import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../../../../constants'
import { auth } from '../../../../firebase'
import SettingsHeader from './SettingsHeader'

const SettingsPage = () => {
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
        <View>
            <SettingsHeader />
            <Text>It is a settings page</Text>
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
})

export default SettingsPage
