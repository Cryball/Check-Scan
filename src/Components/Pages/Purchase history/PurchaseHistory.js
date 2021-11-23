import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react'
import { TouchableOpacity, Text, Image, View, TextInput, StyleSheet, FlatList, } from 'react-native'
import { colors, data } from '../../../../constants'
import { LanguageContext, useTranslation } from '../../../Localization/Translations';
import HeaderPurchaseHistory from './HeaderPurchaseHistory';
import { backgroundPic, chooseColor } from '../../utils/categoryHelper';
import { LinearGradient } from 'expo-linear-gradient';

const PurchaseHistory = () => {

    const navigation = useNavigation()

    const { total } = useTranslation()

    const {
        setAppLanguage,
        appLanguage,
        initializeAppLanguage
    } = useContext(LanguageContext);

    initializeAppLanguage()

    function sumFinalPrice(data) {
        let sum = []
        for (let i = 0; i < data.length; i++) {
            sum.push(Number(data[i].finalPrice))
        }
        return sum.reduce((partial_sum, a) => partial_sum + a, 0).toFixed(2)
    }

    function sumFinalPriceCurrCategory(priceArr) {
        let sum = []
        for (let i = 0; i < priceArr.length; i++) {
            sum.push(Number(priceArr[i]))
        }
        return sum.reduce((partial_sum, a) => partial_sum + a, 0).toFixed(2)
    }

    const colorData = [colors.PRODUCT, colors.CLOTHES, colors.SPORT, colors.CAFE]

    const [filteredCategory, setfilteredCategory] = useState('')

    function Slide({ data, index }) {
        return (
            <View
                style={{
                    height: 70,
                    width: 110,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 10,
                    borderRadius: 12,
                    backgroundColor: colorData[index]
                }}
            >
                <TouchableOpacity onPress={() => { setfilteredCategory(data) }}>
                    <Text style={{ fontSize: 14, color: 'white', fontWeight: '500' }}>{data}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    function Carousel() {
        return (
            <FlatList
                data={["Продукты питания", "Одежда и обувь", "Спортивные товары", "Кафе и рестораны"]}
                style={{ flex: 1 }}
                renderItem={({ item, index }) => {
                    return <Slide data={item} index={index} />;
                }}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        );
    }

    function Grid(props) {
        return (
            <FlatList
                data={props.data}
                renderItem={(item) => {
                    let check = (item.item.content.filter(i => (filteredCategory.length === 0 ? i.shopCategory : i.shopCategory === filteredCategory))).length
                    let priceCurrCategoryArr = (item.item.content.filter(i => (i.shopCategory === filteredCategory))).map(j => j.finalPrice)
                    if (check === 0) {
                        return null
                    }
                    else {
                        return (
                            <View style={styles.itemContainer}>
                                {filteredCategory.length !== 0 ?
                                    <View>
                                        <View style={styles.miniHeader}>
                                            <Text style={styles.text}>{item.item.date}</Text>
                                            <Text style={styles.text}>{total}: {sumFinalPriceCurrCategory(priceCurrCategoryArr)} ₽</Text>
                                        </View>
                                        {item.item.content.map((i, index) => {
                                            //console.log(i.shopCategory, index)
                                            if (i.shopCategory === filteredCategory) {
                                                return (
                                                    <TouchableOpacity
                                                        onPress={() => navigation.navigate('CurrentShopBills', {
                                                            shop: i.shop,
                                                            shopCategory: i.shopCategory,
                                                            finalPrice: i.finalPrice,
                                                            products: i.products
                                                        })}
                                                    >
                                                        <View style={styles.shopRow}>
                                                            <View style={{ ...styles.circle, backgroundColor: chooseColor(i.shopCategory) }}>
                                                                <Image
                                                                    source={
                                                                        backgroundPic(i.shopCategory)
                                                                    }
                                                                    style={{
                                                                        width: 35,
                                                                        height: 35,
                                                                        marginTop: 4
                                                                    }}
                                                                    tintColor='white'
                                                                />
                                                            </View>
                                                            <View style={{
                                                                flexDirection: 'column',

                                                            }}>
                                                                <Text style={styles.shop}>{i.shop}</Text>
                                                                <Text style={styles.shopCategory}>{i.shopCategory}</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{ marginLeft: 80, fontWeight: '700', fontSize: 20 }}>{i.finalPrice} ₽</Text>
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>)
                                            }
                                        })}
                                    </View>

                                    :
                                    <View>
                                        <View style={styles.miniHeader}>
                                            <Text style={styles.text}>{item.item.date}</Text>
                                            <Text style={styles.text}>{total}: {sumFinalPrice(item.item.content)} ₽</Text>
                                        </View>
                                        {item.item.content.map((i, index) => {
                                            //console.log(i.shopCategory, index)
                                            return (
                                                <TouchableOpacity
                                                    onPress={() => navigation.navigate('CurrentShopBills', {
                                                        shop: i.shop,
                                                        shopCategory: i.shopCategory,
                                                        finalPrice: i.finalPrice,
                                                        products: i.products
                                                    })}
                                                >
                                                    <View style={styles.shopRow}>
                                                        <View style={{ ...styles.circle, backgroundColor: chooseColor(i.shopCategory) }}>
                                                            <Image
                                                                source={
                                                                    backgroundPic(i.shopCategory)
                                                                }
                                                                style={{
                                                                    width: 35,
                                                                    height: 35,
                                                                    marginTop: 4
                                                                }}
                                                                tintColor='white'
                                                            />
                                                        </View>
                                                        <View style={{
                                                            flexDirection: 'column',

                                                        }}>
                                                            <Text style={styles.shop}>{i.shop}</Text>
                                                            <Text style={styles.shopCategory}>{i.shopCategory}</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={{ marginLeft: 80, fontWeight: '700', fontSize: 20 }}>{i.finalPrice} ₽</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>)
                                        }
                                        )}
                                    </View>

                                }
                            </View>
                        )
                    }
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
            <HeaderPurchaseHistory />
            <LinearGradient colors={[colors.MAIN_GREEN, '#68BA8E',]}>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 15,
                    paddingHorizontal: 24,
                }}>
                    <Carousel />
                </View>
                {filteredCategory.length !== 0 ? <View style={{ paddingHorizontal: 24, marginBottom: 15 }}>
                    <TouchableOpacity onPress={() => { setfilteredCategory('') }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Сбросить фильтр</Text>
                    </TouchableOpacity>
                </View> : null}
            </LinearGradient>

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
        borderRadius: 40,
        marginRight: 10,
        alignItems: 'center'
    },
});

export default PurchaseHistory
