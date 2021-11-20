import React from 'react'
import { TouchableOpacity, Text, TouchableHighlight, View, TextInput, StyleSheet, FlatList, Dimensions } from 'react-native'
import { colors, data } from '../../../../constants'
import Header from '../../Header/Header';

const PurchaseHistory = () => {
    function sumFinalPrice(data) {
        let sum = []
        for (let i = 0; i < data.length; i++) {
            sum.push(Number(data[i].finalPrice))
        }
        return sum.reduce((partial_sum, a) => partial_sum + a, 0).toFixed(2)
    }

    function Grid(props) {
        return (
            <FlatList
                data={props.data}
                renderItem={(item) => {
                    //console.log(item.item.content[1]);
                    return (
                        <View style={styles.itemContainer}>
                            <View style={styles.miniHeader}>
                                <Text style={styles.text}>{item.item.date}</Text>
                                <Text style={styles.text}>Итого: {sumFinalPrice(item.item.content)} ₽</Text>
                            </View>
                            {item.item.content.map(i => {
                                //console.log(i.finalPrice);
                                return (
                                    <View style={styles.shopRow}>
                                        <View style={styles.circle}></View>
                                        <View style={{
                                            flexDirection: 'column',

                                        }}>
                                            <Text style={styles.shop}>{i.shop}</Text>
                                            <Text style={styles.shopCategory}>{i.shopCategory}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ marginLeft: 80, fontWeight: '700', fontSize: 20 }}>{i.finalPrice} ₽</Text>
                                        </View>
                                    </View>)
                            })}
                        </View>

                    )
                }}
                keyExtractor={(item, index) => index.toString()}
                numColumns={1}
                contentContainerStyle={{
                    flexGrow: 1,
                }} />
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <Grid data={data} />
            <Text style={{ color: 'white', marginTop: 40 }}>.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        //width: '100%',
        //height: 'auto',
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
    miniHeader: {
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between', marginBottom: 10,
    },
    shopRow: {
        flexDirection: 'row',
        marginBottom: 24,
        marginTop: 15,
        justifyContent: 'space-between',
        borderBottomColor: colors.LINE,
        borderBottomWidth: 2,
        paddingBottom: 5
    },
    circle: {
        width: 45,
        height: 45,
        backgroundColor: colors.TEXT_GRAY,
        borderRadius: 40,
        marginRight: 10
    },
});

export default PurchaseHistory
