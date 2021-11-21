import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useState, useEffect, useContext } from 'react';
//import * as RNLocalize from 'react-native-localize'; // 3
import en from './langs/en.json'
import ru from './langs/ru.json'

const DEFAULT_LANGUAGE = 'English';
const APP_LANGUAGE = 'appLanguage';

export const LanguageContext = createContext({
    appLanguage: DEFAULT_LANGUAGE,
    setAppLanguage: () => { },
    initializeAppLanguage: () => { }
});

const languageObj = {
    English: en,
    Русский: ru,
};

export const LanguageContextProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(DEFAULT_LANGUAGE);

    // useEffect(() => {
    //     const currentLanguage = RNLocalize.findBestAvailableLanguage(
    //         Object.keys(languageObj),
    //     );
    //     //setSelectedLanguage(currentLanguage?.languageTag || 'en');
    // }, []);

    const setLanguage = language => {
        setSelectedLanguage(language);
        AsyncStorage.setItem(APP_LANGUAGE, language);
    };

    const initializeAppLanguage = async () => {
        const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);
        if (currentLanguage) {
            setLanguage(currentLanguage);
        }
        else {
            setLanguage(DEFAULT_LANGUAGE);
        }

    };

    return (
        <LanguageContext.Provider value={{
            ...languageObj[selectedLanguage],
            setAppLanguage: setLanguage,
            appLanguage: selectedLanguage,
            initializeAppLanguage
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => useContext(LanguageContext);
