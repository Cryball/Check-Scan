import React from 'react'
import { TouchableOpacity, Text, TouchableHighlight, View, TextInput, StyleSheet, FlatList, Dimensions } from 'react-native'
import { colors } from '../../../../constants'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../Header/Header';
import { IntlProvider } from 'react-intl'

const PurchaseHistory = () => {
    const data = [
        {
            content: [
                {
                    id: 1, shop: 'Ярче1', shopCategory: 'Продукты питания', products: [
                        {
                            name: 'Вода',
                            count: 1,
                            price: '39.99'
                        },
                        {
                            name: 'Шоколад',
                            count: 3,
                            price: '89.99'
                        }],
                    finalPrice: '309.96'
                },
                {
                    id: 1, shop: 'Ярче2', shopCategory: 'Продукты питания', products: [
                        {
                            name: 'Вода',
                            count: 1,
                            price: '39.99'
                        },
                        {
                            name: 'Шоколад',
                            count: 3,
                            price: '89.99'
                        }],
                    finalPrice: '696.96'
                },
            ],
            date: '18.11.2021'
        },
        {
            content: [
                {
                    id: 2, shop: 'CROPP', shopCategory: 'Одежда и обувь', products: [
                        {
                            name: 'Пальто',
                            count: 1,
                            price: '7990.00'
                        },
                    ],
                    finalPrice: '7990.00'
                },
            ],
            date: '15.11.2021'
        },
        {
            content: [
                {
                    id: 3, shop: 'Пятерочка', shopCategory: 'Продукты питания', products: [
                        {
                            name: 'Печенье',
                            count: 1,
                            price: '49.99'
                        },
                    ],
                    finalPrice: '49.99'
                }
            ],
            date: '10.11.2021'
        },
    ];

    //const size = Dimensions.get('window').width / numColumns;

    function sumFinalPrice(data) {
        console.log(data[0].finalPrice)
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
