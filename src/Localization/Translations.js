import React, { createContext, useState, useEffect, useContext } from 'react';
//import * as RNLocalize from 'react-native-localize'; // 3
import en from './langs/en.json'
import ru from './langs/ru.json'

const DEFAULT_LANGUAGE = 'English';

export const LanguageContext = createContext({
    appLanguage: DEFAULT_LANGUAGE,
    setAppLanguage: () => { },
});

const languageObj = {
    English: en,
    Russian: ru,
};

export const LanguageContextProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(DEFAULT_LANGUAGE);

    const setLanguage = language => {
        setSelectedLanguage(language);
        //AsyncStorage.setItem(APP_LANGUAGE, language);
    };
    // useEffect(() => {
    //     // const currentLanguage = RNLocalize.findBestAvailableLanguage(
    //     //     Object.keys(languageObj),
    //     // );

    //     setSelectedLanguage(currentLanguage?.languageTag || 'en');
    // }, []);

    // const value = {
    //     ...languageObj[selectedLanguage],
    //     setAppLanguage: () => { },
    // };
    return (
        <LanguageContext.Provider value={{
            ...languageObj[selectedLanguage],
            setAppLanguage: setLanguage,
            appLanguage: selectedLanguage
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => useContext(LanguageContext);
