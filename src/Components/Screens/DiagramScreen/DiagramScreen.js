import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native'
import DiagramHeader from './DiagramHeader'
import { VictoryPie } from 'victory-native'
import { data } from '../../../../constants';
import DiagramCategory from './DiagramCategory';
import { useTranslation } from '../../../Localization/Translations';

const DiagramScreen = () => {

    const { november } = useTranslation()

    function sumAllPrice(data) {
        let sum = []
        for (let i = 0; i < data.length; i++) {
            let currContent = data[i].content
            for (let j = 0; j < currContent.length; j++) {
                sum.push(Number(currContent[j].finalPrice))
            }
        }
        return sum.reduce((partial_sum, a) => partial_sum + a, 0).toFixed(2)
    }

    return (
        <View style={{ flex: 1 }}>
            <DiagramHeader />
            <View style={styles.allSum}>
                <Text style={{ fontWeight: '700', fontSize: 24 }}>{november}</Text>
                <Text style={{ fontWeight: '700', fontSize: 24 }}>{sumAllPrice(data)} ₽</Text>
            </View>
            <FlatList
                data={[1]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={() => {
                    return (
                        <View>
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

export default DiagramScreen
