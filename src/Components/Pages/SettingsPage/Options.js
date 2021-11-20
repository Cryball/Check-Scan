import { useNavigation } from '@react-navigation/native'
import React, { useState, useContext, useRef } from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { colors } from '../../../../constants'
import { LanguageContext, useTranslation } from '../../../Localization/Translations';
import ActionSheet from "react-native-actionsheet";

const Options = (props) => {
    const actionSheet = useRef()

    const showActionSheet = () => {
        actionSheet.current.show()
    }

    return (
        <View style={styles.settingsRow}>
            <TouchableOpacity style={{ width: '80%' }} onPress={showActionSheet}>
                <Text style={styles.language}>
                    {props.title}
                </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{props?.chosen}</Text>
                <Image
                    source={
                        require('../../../images/right-arrow.png')
                    }
                    style={{
                        width: 14,
                        height: 14,
                        marginLeft: 10

                    }}
                    tintColor='black'
                />
            </View>
            <ActionSheet
                ref={actionSheet}
                title='Choose language'
                options={props.info}
                cancelButtonIndex={props?.cancelIndex || 2}
                onPress={(index) => {
                    if (index === (props.info.length - 1)) {

                    }
                    else {
                        props.funcToSubmit(props.info[index]);
                    }
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    language: {
        paddingTop: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: '700'
        // textAlign: 'center',
    },
    settingsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    }
})

export default Options
