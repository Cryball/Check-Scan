import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import DiagramHeader from './DiagramHeader'
import { VictoryPie } from 'victory-native'

const graphicColor = ['#388087', '#6fb3b8', '#badfe7']; // Colors
const wantedGraphicData = [{ y: 10 }, { y: 50 }, { y: 60 }]; // Data that we want to display
const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }]; // Data used to make the animate prop work

const DiagramPage = () => {

    const [graphicData, setGraphicData] = useState(defaultGraphicData);

    useEffect(() => {
        setGraphicData(wantedGraphicData); // Setting the data that we want to display
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <DiagramHeader />
            <Text>It is a Diagram page</Text>
            <View style={{ alignItems: 'center' }}>
                <VictoryPie
                    animate={{ easing: 'exp' }}
                    data={graphicData}
                    width={250}
                    height={250}
                    colorScale={graphicColor}
                    innerRadius={50}
                />
            </View>
        </View>
    )
}

export default DiagramPage
