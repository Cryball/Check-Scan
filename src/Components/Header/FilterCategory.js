import React from 'react'
import { Image, Text, TouchableHighlight, View, TextInput, StyleSheet, FlatList } from 'react-native'
import { colors } from '../../../constants';

const FilterCategory = () => {

    const colorData = [colors.PRODUCT, colors.CLOTHES, colors.SPORT, colors.CAFE]

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
                <TouchableHighlight>
                    <Text style={{ fontSize: 14, color: 'white', fontWeight: '500' }}>{data}</Text>
                </TouchableHighlight>
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
    return (
        <View style={{
            flexDirection: 'row',
            marginTop: 15
        }}>
            <Carousel />
        </View>

    )
}

export default FilterCategory
