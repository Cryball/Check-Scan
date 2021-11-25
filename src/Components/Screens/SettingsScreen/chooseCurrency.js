import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useState, useEffect, useContext } from 'react';
//import * as RNLocalize from 'react-native-localize'; // 3

const DEFAULT_CURRENCY = '₽';
const APP_CURRENCY = 'appCurrency';
const currency = ['₽', '$', '₴']

export const CurrencyContext = createContext({
    appCurrency: DEFAULT_CURRENCY,
    setAppCurrency: () => { },
    initializeAppCurrency: () => { }
});

export const CurrencyContextProvider = ({ children }) => {
    const [selectedCurrency, setSelectedCurrency] = useState(DEFAULT_CURRENCY);

    const setCurrency = currency => {
        setSelectedCurrency(currency);
        AsyncStorage.setItem(APP_CURRENCY, currency);
    };

    const initializeAppCurrency = async () => {
        const currentCurrency = await AsyncStorage.getItem(APP_CURRENCY);
        if (currentLanguage) {
            setCurrency(currentCurrency);
        }
        else {
            setCurrency(DEFAULT_CURRENCY);
        }

    };

    return (
        <CurrencyContext.Provider value={{
            setAppCurrency: setCurrency,
            appCurrency: selectedCurrency,
            initializeAppCurrency
        }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useTranslation = () => useContext(LanguageContext);
