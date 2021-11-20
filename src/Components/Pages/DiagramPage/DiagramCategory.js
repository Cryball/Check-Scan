import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableHighlight, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { colors, data } from '../../../../constants';

const DiagramCategory = () => {
    const [isPress, setIsPress] = useState(false);
    function sumFinalPrice(data) {
        let sum = []
        for (let i = 0; i < data.length; i++) {
            sum.push(Number(data[i].finalPrice))
        }
        return sum.reduce((partial_sum, a) => partial_sum + a, 0).toFixed(2)
    }

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
        <View>
            <View style={styles.category}>
                <TouchableOpacity style={isPress ? styles.buttonNormal : styles.buttonPressed}
                    onPress={() => (setIsPress(false))} >
                    <Text style={{ fontWeight: '700', fontSize: 20 }}>Категории</Text>
                </TouchableOpacity>
                <TouchableOpacity style={isPress ? styles.buttonPressed : styles.buttonNormal} onPress={() => (setIsPress(true))}>
                    <Text style={{ fontWeight: '700', fontSize: 20 }}>Магазины</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList data={chartData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item) => {
                        return (
                            <View style={styles.category}>
                                <Text style={{ fontSize: 16 }}>{item.item.label}</Text>
                                <Text style={{ fontSize: 16 }}>{item.item.y} ₽</Text>
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
    }
})

export default DiagramCategory