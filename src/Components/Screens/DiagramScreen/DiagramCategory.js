import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableHighlight, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { colors, data } from '../../../../constants';
import { VictoryPie } from 'victory-native'
import { useTranslation } from '../../../Localization/Translations';

const graphicColor = [colors.PRODUCT, colors.SPORT, colors.CAFE, colors.CLOTHES, '#badfe7', '#07B29E']; // Colors

const DiagramCategory = () => {
    const [isPress, setIsPress] = useState(false);
    const [selectedCategory, setselectedCategory] = useState(null)

    const { categories, shops, } = useTranslation()

    function prepareChartDataShopCategory(data) {
        let sum = {}
        for (let i = 0; i < data.length; i++) {
            let currContent = data[i].content
            for (let j = 0; j < currContent.length; j++) {
                if (sum[currContent[j].shopCategory]) {
                    sum[currContent[j].shopCategory] += Number(currContent[j].finalPrice)
                }
                else {
                    sum[currContent[j].shopCategory] = Number(currContent[j].finalPrice)
                }
            }
        }
        let keys = Object.keys(sum)
        let values = Object.values(sum)
        let finalChart = []
        for (let k = 0; k < Object.keys(sum).length; k++) {
            let _ =
            {
                label: keys[k],
                y: values[k],
            }
            finalChart.push(_)
        }
        return finalChart
    }

    function prepareChartDataShop(data) {
        let sum = {}
        for (let i = 0; i < data.length; i++) {
            let currContent = data[i].content
            for (let j = 0; j < currContent.length; j++) {
                if (sum[currContent[j].shop]) {
                    sum[currContent[j].shop] += Number(currContent[j].finalPrice)
                }
                else {
                    sum[currContent[j].shop] = Number(currContent[j].finalPrice)
                }
            }
        }
        let keys = Object.keys(sum)
        let values = Object.values(sum)
        let finalChart = []
        for (let k = 0; k < Object.keys(sum).length; k++) {
            let _ =
            {
                label: keys[k],
                y: values[k]
            }
            finalChart.push(_)
        }
        return finalChart
    }

    const chartData = prepareChartDataShopCategory(data)

    const chartDataShop = prepareChartDataShop(data)

    const _color = data.map(i => i.content.map(j => j.color))
    const mergedColor = [].concat.apply([], _color);
    const colorArr = [...new Set(mergedColor)]

    return (
        <View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -20 }}>
                <VictoryPie
                    data={isPress ? chartDataShop : chartData}
                    radius={(selectedCategory && selectedCategory.label == datum.label) ? 140 : 120}
                    innerRadius={70}
                    style={{
                        labels: { display: 'none' },

                    }}
                    // events={[{
                    //     target: "data",
                    //     eventHandlers: {
                    //         onclick: () => {
                    //             return [
                    //                 {
                    //                     target: "data",
                    //                     mutation: ({ style }) => {
                    //                         return style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                    //                     }
                    //                 }, {
                    //                     target: "labels",
                    //                     mutation: ({ text }) => {
                    //                         return text === "clicked" ? null : { text: "clicked" };
                    //                     }
                    //                 }
                    //             ];
                    //         }
                    //     }
                    // }]}
                    colorScale={isPress ? graphicColor : colorArr}
                />
            </View>

            <View style={styles.category}>
                <TouchableOpacity style={isPress ? styles.buttonNormal : styles.buttonPressed}
                    onPress={() => (setIsPress(false))} >
                    <Text style={{ fontWeight: '700', fontSize: 20 }}>{categories}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={isPress ? styles.buttonPressed : styles.buttonNormal} onPress={() => (setIsPress(true))}>
                    <Text style={{ fontWeight: '700', fontSize: 20 }}>{shops}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList data={isPress ? chartDataShop : chartData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        //console.log(item, "item", index)
                        return (
                            <View style={{
                                ...styles.category, backgroundColor: isPress ? graphicColor[index] : colorArr[index],
                                borderRadius: 10, marginBottom: 5, marginTop: 5
                            }}>
                                <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.label}</Text>
                                <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.y} ₽</Text>
                            </View>
                        )
                    }}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                />
            </View>
            <Text style={{ color: 'white', marginTop: 60 }}>.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around',
        backgroundColor: 'white', width: '100%', padding: 10
    },
    buttonNormal: {
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonPressed: {
        borderBottomColor: colors.MAIN_GREEN,
        borderBottomWidth: 3,
        paddingLeft: 20,
        paddingRight: 20
    },
})

export default DiagramCategory