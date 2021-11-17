import React from 'react'
import { TouchableOpacity, Text, TouchableHighlight, View, TextInput, StyleSheet, FlatList, Dimensions } from 'react-native'
import { colors } from '../../../../constants'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../Header/Header';

const PurchaseHistory = () => {
    const data = [
        { id: 1, value: 'A' },
        { id: 2, value: 'B' },
        { id: 3, value: 'A' },
        { id: 4, value: 'A' },
        // { id: '5', value: 'A' },
        // { id: '6', value: 'A' },
    ];

    const numColumns = 1;
    //const size = Dimensions.get('window').width / numColumns;

    function Grid(props) {
        return (
            <FlatList
                data={data}
                renderItem={(item) => (
                    <View style={styles.itemContainer}>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'space-between', marginBottom: 10,
                        }}>
                            <Text style={styles.text}>Сегодня</Text>
                            <Text style={styles.text}>Итого: 400 ₽</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            marginBottom: 24,
                            marginTop: 15,
                            justifyContent: 'space-between',
                            borderBottomColor: colors.LINE,
                            borderBottomWidth: 2,
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
                                <Text style={styles.shop}>Ярче</Text>
                                <Text style={styles.shopCategory}>Продукты питания</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 80, fontWeight: '700', fontSize: 20 }}>200 ₽</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderBottomColor: colors.LINE,
                            borderBottomWidth: 2,
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
                                <Text style={styles.shop}>Ярче</Text>
                                <Text style={styles.shopCategory}>Продукты питания</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 80, fontWeight: '700', fontSize: 20 }}>200 ₽</Text>
                            </View>
                        </View>

                    </View>
                )}
                keyExtractor={item => item.id.toString()}
                numColumns={numColumns} />
        );
    }

    return (
        <View>
            <Header />
            <Grid />
        </View>

    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        height: 'auto',
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
    shop: {
        flex: 1,
        fontWeight: '700',
        fontSize: 18
    },
    shopCategory: {
        flex: 1,
        fontSize: 16,
        color: colors.TEXT_GRAY,
    },
    text: {
        fontWeight: '700',
        fontSize: 20,
    },
});

export default PurchaseHistory
