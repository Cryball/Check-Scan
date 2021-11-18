import React from 'react'
import { Image, Text, TouchableHighlight, View, TextInput, StyleSheet, FlatList } from 'react-native'

const FilterCategory = () => {
    function Slide({ data }) {
        return (
            <View
                style={{
                    height: 70,
                    width: 110,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 10,
                    borderRadius: 12,
                    backgroundColor: '#C4C4C4',
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
                    return <Slide data={item} key={index} />;
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
