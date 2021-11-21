import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableHighlight, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native'
import { colors, data } from '../../../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import Search from '../../Header/Search';
import CurrentShopBillsHeader from './CurrentShopBillsHeader';
import { backgroundPic, chooseColor } from '../../utils/categoryHelper';
import { useTranslation } from '../../../Localization/Translations';

const CurrentShopBills = ({ route }) => {
    const { receipt, viewScan, amount, price, productName } = useTranslation()
    const navigation = useNavigation()
    const { shop, shopCategory, finalPrice, products } = route.params
    return (
        <View style={{ flex: 1 }}>
            <CurrentShopBillsHeader />
            <View style={{ alignItems: 'center', flexDirection: 'column', margin: 50 }}>
                <View style={{ ...styles.circle, backgroundColor: chooseColor(shopCategory) }}>
                    <Image
                        source={
                            backgroundPic(shopCategory)
                        }
                        style={{
                            width: 60,
                            height: 60,
                            marginTop: 6,

                        }}
                    //tintColor='white'
                    />
                </View>
                <Text style={{ fontSize: 30, fontWeight: '700', marginTop: 30 }}>{shop}</Text>
                <Text style={{ fontSize: 18, fontWeight: '700', color: colors.TEXT_GRAY }}>{shopCategory}</Text>
                <Text style={{ fontSize: 30, fontWeight: '700', margin: 10 }}>{finalPrice} ₽</Text>
            </View>

            <View style={{ padding: 10, backgroundColor: 'white', flex: 1 }}>
                <View style={styles.receiptScan}>

                    <Text style={{ fontWeight: '700', fontSize: 25 }}>{receipt}</Text>

                    <TouchableOpacity>
                        <Text style={{ fontWeight: '700', fontSize: 18, color: colors.TEXT_GRAY }}>{viewScan}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.category}>
                    <Text style={{ fontSize: 16 }}>{productName}</Text>
                    <Text style={{ fontSize: 16 }}>{amount}</Text>
                    <Text style={{ fontSize: 16 }}>{price}</Text>
                </View>

                <FlatList
                    data={products}
                    renderItem={(item) => {
                        //console.log(item.item);
                        return (
                            <View style={styles.data}>
                                <Text style={{ fontSize: 16, width: '33%' }}>{item.item.name}</Text>
                                <Text style={{ fontSize: 16, width: '-10%' }}>{item.item.count}</Text>
                                <Text style={{ fontSize: 16, }}>{item.item.price} ₽</Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}

                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    receiptScan: {
        alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between',
        backgroundColor: 'white', padding: 10, marginBottom: 10,
    },
    category: {
        alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around',
        backgroundColor: 'white',
    },
    data: {
        alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between',
        backgroundColor: 'white', padding: 10, marginBottom: 10,
    },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
        alignItems: 'center'
    },

})


export default CurrentShopBills