import React from 'react'
import { Image, Linking, Text, TouchableHighlight, View, TextInput, StyleSheet } from 'react-native'
import { colors } from '../../../constants'

const Search = () => {

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <TextInput
                    style={stylesCreated.input}
                    placeholder='Поиск по приложению'
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
        </View>

    )
}

const stylesCreated = StyleSheet.create({
    input: {
        height: 40,
        width: '70%',
        marginRight: 30,
        padding: 10,
        color: '#FFFBFB',
        backgroundColor: colors.LIGHT_GREEN,
        borderRadius: 10,
        fontWeight: '700',
    },
})

export default Search
