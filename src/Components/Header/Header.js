import React from 'react'
import { Image, Linking, Text, TouchableHighlight, View, TextInput, StyleSheet } from 'react-native'
import { colors } from '../../../constants'
import FilterCategory from './FilterCategory'
import Search from './Search'

const Header = () => {

    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 18,
                }}
            >
                <View>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: '700',
                            marginBottom: 6,
                        }}
                    >
                        Hi, Daniil!
                    </Text>
                    <Text style={{ color: 'white' }}>Welcome Back!</Text>
                </View>
                <View>
                    <TouchableHighlight
                    // onPress={() => Linking.openURL('https://google.com')}
                    >
                        <Image
                            source={{
                                uri: 'https://pbs.twimg.com/profile_images/1353826388898410496/VQyCqZD7_400x400.jpg',
                            }}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                            }}
                        />
                    </TouchableHighlight>
                </View>
            </View>
            <Search />
            <FilterCategory />
        </View>
    )
}

const stylesCreated = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
})

export default Header
