import { useNavigation } from '@react-navigation/native'
import React, { useState, useContext, useRef } from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { colors } from '../../../../constants'
import { LanguageContext, useTranslation } from '../../../Localization/Translations';
import ActionSheet from "react-native-actionsheet";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import { changeCurrencyAction } from '../../../redux/currencyReducer';

const OptionForCurrency = () => {
    const currencyArr = ['₽', '$', '€', 'Cancel']
    const currency = useSelector(state => state.currency.currency)
    const actionSheet = useRef()

    const showActionSheet = () => {
        actionSheet.current.show()
    }

    const dispatch = useDispatch()

    const changeCurrency = (currency) => {
        dispatch(changeCurrencyAction(currency))
    }

    return (
        <View style={styles.settingsRow}>
            <TouchableOpacity style={{ width: '80%' }} onPress={showActionSheet}>
                <Text style={styles.language}>
                    Валюта
                </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{currency}</Text>
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
                title='Choose currency'
                options={currencyArr}
                cancelButtonIndex={3}
                onPress={(index) => {
                    if (index === (currencyArr.length - 1)) {

                    }
                    else {
                        changeCurrency(currencyArr[index]);
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

export default OptionForCurrency
