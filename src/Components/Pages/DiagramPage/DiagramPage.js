import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native'
import DiagramHeader from './DiagramHeader'
import { VictoryPie } from 'victory-native'
import { data } from '../../../../constants';
import DiagramCategory from './DiagramCategory';

const graphicColor = ['#388087', '#6fb3b8', '#badfe7']; // Colors

const DiagramPage = () => {

    const [selectedCategory, setselectedCategory] = useState(null)

    function sumAllPrice(data) {
        let sum = []
        for (let i = 0; i < data.length; i++) {
            let currContent = data[i].content
            for (let j = 0; j < currContent.length; j++) {
                sum.push(Number(currContent[j].finalPrice))
            }
        }
        console.log(sum)
        return sum.reduce((partial_sum, a) => partial_sum + a, 0).toFixed(2)
    }
    console.log(sumAllPrice(data), 'here')

    function prepareChartData(data) {
        let sum = {}
        for (let i = 0; i < data.length; i++) {
            let currContent = data[i].content
            //console.log(i)
            for (let j = 0; j < currContent.length; j++) {
                if (sum[currContent[j].shopCategory]) {
                    sum[currContent[j].shopCategory] += Number(currContent[j].finalPrice)
                }
                else {
                    sum[currContent[j].shopCategory] = Number(currContent[j].finalPrice)
                }
            }
            //console.log(Object.keys(sum))
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

    const chartData = prepareChartData(data)
    return (
        <View style={{ flex: 1 }}>
            <DiagramHeader />
            <View style={styles.allSum}>
                <Text style={{ fontWeight: '700', fontSize: 24 }}>Ноябрь</Text>
                <Text style={{ fontWeight: '700', fontSize: 24 }}>{sumAllPrice(data)} ₽</Text>
            </View>
            <FlatList
                data={[1]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => {
                    return (
                        <View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -20 }}>
                                <VictoryPie
                                    data={chartData}
                                    radius={(selectedCategory && selectedCategory.label == datum.label) ? 140 : 120}
                                    innerRadius={70}
                                    // colorScale={graphicColor}
                                    events={[{
                                        target: "data",
                                        eventHandlers: {
                                            onclick: () => {
                                                return [
                                                    {
                                                        target: "data",
                                                        mutation: ({ style }) => {
                                                            return style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                                                        }
                                                    }, {
                                                        target: "labels",
                                                        mutation: ({ text }) => {
                                                            return text === "clicked" ? null : { text: "clicked" };
                                                        }
                                                    }
                                                ];
                                            }
                                        }
                                    }]}
                                    colorScale={graphicColor}
                                />
                            </View>
                            <DiagramCategory />
                        </View>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    allSum: {
        alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around',
        margin: 10, backgroundColor: 'white', borderRadius: 15, paddingTop: 15, paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
})

export default DiagramPage
