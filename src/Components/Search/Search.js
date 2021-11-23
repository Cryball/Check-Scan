import React from 'react'
import { Image, Text, TouchableHighlight, View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../../constants'
import { useTranslation } from '../../Localization/Translations';

function AddonToSeach() {
    return (

        <View style={stylesCreated.searchSection}>
            <Icon style={stylesCreated.searchIcon} name="ios-search" size={20} color="#000" />
            <TextInput
                style={stylesCreated.input}
                placeholder='Поиск по приложению'
                placeholderTextColor='#FFFBFB'

                underlineColorAndroid="transparent"
            />
        </View>
    );
}

const Search = () => {
    const { searchByApp } = useTranslation()
    return (

        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <TextInput
                style={stylesCreated.input}
                placeholder={searchByApp}
                placeholderTextColor='#FFFBFB' />

            <View style={{
                width: 45,
                height: 45,
                backgroundColor: colors.LIGHT_GREEN,
                borderRadius: 40
            }}>
                <TouchableHighlight>
                    <Image
                        style={{
                            width: 35,
                            height: 35,
                            marginRight: 9,
                            margin: 4
                        }}
                        source={require('./magnifier.png')}
                        tintColor='#FFFBFB'
                    />
                </TouchableHighlight>
            </View>
        </View>


    )
}

const stylesCreated = StyleSheet.create({
    input: {
        flex: 1,
        height: 40,
        width: '70%',
        marginRight: 30,
        padding: 10,
        color: '#FFFBFB',
        backgroundColor: colors.LIGHT_GREEN,
        borderRadius: 10,
        fontWeight: '700',
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
})

export default Search
