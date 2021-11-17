import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import { auth } from '../../../../firebase'

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
            <Text>It is a settings page 123</Text>
            <TouchableOpacity
                onPress={handleSignOut}
                style={{ fontSize: 40, color: 'blue' }}
            >
                <Text>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingsPage
