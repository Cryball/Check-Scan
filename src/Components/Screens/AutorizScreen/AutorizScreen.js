import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../../../../firebase'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../../constants';
import { useTranslation } from '../../../Localization/Translations';

const AutorizScreen = () => {
    const { emailText, passwordText, register, signIn, meet } = useTranslation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
            }
        })

        return unsub
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <LinearGradient colors={[colors.MAIN_GREEN, '#68BA8E',]} style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>{meet}</Text>
                <TextInput
                    placeholder={emailText}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                    placeholderTextColor='#FFFBFB'
                />
                <TextInput
                    placeholder={passwordText}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                    placeholderTextColor='#FFFBFB'
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>{signIn}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>{register}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{ width: '80%' }} onPress={() => navigation.navigate('forgotPassword')}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Забыли пароль?</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>

    )
}

export default AutorizScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: colors.MAIN_GREEN
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 20,
        color: '#FFFBFB',
        backgroundColor: colors.LIGHT_GREEN,
        borderColor: colors.MAIN_GREEN,
        borderWidth: 3,
        fontWeight: '700'
    },
    buttonContainer: {
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#F6F0F0',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: colors.MAIN_GREEN,
        borderWidth: 3,
        marginBottom: 10
    },
    buttonText: {
        color: colors.TEXT_GRAY,
        fontWeight: '700',
        fontSize: 16,
    },
    text: {
        color: 'white',
        fontWeight: '700',
        fontSize: 24,
        marginBottom: 30,
    }
})