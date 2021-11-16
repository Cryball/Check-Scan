import React from 'react'
import { Image, Text, TouchableHighlight, View, TextInput, StyleSheet, FlatList, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-web';
import { colors } from '../../../constants'

const PurchaseHistory = () => {
    const data = [
        { id: 'a', value: 'A' },
        { id: 'b', value: 'B' },
        { id: 'c', value: 'A' },
        { id: 'd', value: 'B' },
        { id: 'e', value: 'A' },
        { id: 'f', value: 'B' },
    ];
    const numColumns = 1;
    const size = Dimensions.get('window').width / numColumns;
    const styles = StyleSheet.create({
        itemContainer: {
            width: '100%',
            height: size,
            borderRadius: 10,
            backgroundColor: colors.MAIN_WHITE,
            padding: 24,
            marginBottom: 15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,

            elevation: 14,
        },
        item: {
            flex: 1,
            margin: 3,
            backgroundColor: 'lightblue',
        },
        text: {
            fontWeight: '700',
            fontSize: 20,
        },
    });

    function Grid(props) {
        return (
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <Text style={styles.text}>Сегодня</Text>
                            <Text style={styles.text}>Итого: 400 Р</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            marginBottom: 24,
                            marginTop: 15,
                            justifyContent: 'space-between',
                        }}>
                            <View style={{
                                width: 45,
                                height: 45,
                                backgroundColor: colors.TEXT_GRAY,
                                borderRadius: 40,
                                marginRight: 15
                            }}></View>
                            <View style={{
                                flexDirection: 'column',

                            }}>
                                <Text style={styles.item}>Ярче</Text>
                                <Text style={styles.item}>Продукты питания</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 100 }}>200 Р</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <View style={{
                                width: 45,
                                height: 45,
                                backgroundColor: colors.TEXT_GRAY,
                                borderRadius: 40,
                                marginRight: 15
                            }}></View>
                            <View style={{
                                flexDirection: 'column',

                            }}>
                                <Text style={styles.item}>Ярче</Text>
                                <Text style={styles.item}>Продукты питания</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 100 }}>200 Р</Text>
                            </View>
                        </View>

                    </View>
                )}
                keyExtractor={item => item.id}
                numColumns={numColumns} />
        );
    }

    return (
        <View style={{
            flexDirection: 'column',
            marginBottom: 10,
        }}>
            <View>
                <Grid />
            </View>
        </View >

    )
}

export default PurchaseHistory
