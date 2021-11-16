import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'

const Footer = () => {
    return (
        <View
            style={{
                flex: 0.1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 80,
            }}
        >
            <View style={{ alignItems: 'center', width: '25%' }}>
                <TouchableHighlight>
                    <Image
                        style={{
                            width: 36,
                            height: 36
                        }}
                        source={require('./plus.png')}
                    />
                </TouchableHighlight>
                <Text style={{ fontSize: 15, paddingTop: 7, }}>Новый чек</Text>
            </View>
            <View style={{ alignItems: 'center', width: '25%', }}>
                <TouchableHighlight>
                    <Image
                        style={{
                            width: 36,
                            height: 36
                        }}
                        source={require('./invoice.png')}
                    />
                </TouchableHighlight>
                <Text style={{ fontSize: 15, paddingTop: 7 }}>История покупок</Text>
            </View>
            <View style={{ alignItems: 'center', width: '25%', }}>
                <TouchableHighlight>
                    <Image
                        style={{
                            width: 36,
                            height: 36,
                        }}
                        source={require('./pie-chart.png')}
                    />
                </TouchableHighlight>
                <Text style={{ fontSize: 15, paddingTop: 7 }}>Анализ затрат</Text>
            </View>
            <View style={{ alignItems: 'center', width: '25%', }}>
                <TouchableHighlight>
                    <Image
                        style={{
                            width: 36,
                            height: 36,
                        }}
                        source={require('./settings.png')}
                        tintColor='black'
                    />
                </TouchableHighlight>
                <Text style={{ fontSize: 15, paddingTop: 7 }}>Настройки</Text>
            </View>
        </View>
    )
}

export default Footer
