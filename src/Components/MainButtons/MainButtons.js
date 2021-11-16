import React from 'react'
import { StyleSheet, Image, Linking, Text, TouchableHighlight, View } from 'react-native'
import { colors } from '../../../constants';

const MainButtons = () => {

    return (
        <View
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <View style={{ marginBottom: 30, }}>
                <TouchableHighlight>
                    <View style={styles.rectangle}>
                        <Text style={styles.textNewReceipt}>
                            Добавьте новый чек
                        </Text>
                        <Text style={{ fontSize: 70, fontWeight: '500', color: '#D1BCBC' }}>+</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={{ marginBottom: 30, }}>
                <TouchableHighlight>
                    <View style={styles.rectangle}>
                        <Text style={styles.text}>
                            Посмотрите историю покупок
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={{ marginBottom: 30, }}>
                <TouchableHighlight>
                    <View style={styles.rectangle}>
                        <Text style={styles.text}>
                            Анализ затрат
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    rectangle: {
        width: '100%',
        height: 'auto',
        borderRadius: 10,
        backgroundColor: colors.MAIN_WHITE,
        alignItems: 'center',
    },
    textNewReceipt: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: -10
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        margin: 20
    }
});

export default MainButtons
