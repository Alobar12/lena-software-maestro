import { NativeModules, Platform } from 'react-native';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const tr = require('./language_files/tr.json');

const resources = {
    'tr-US': tr,
    'tr_TR': tr
};

//detected device language
const deviceLanguage =
    Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;

i18n.use(initReactI18next).init({
    fallbackLng: 'tr_TR',
    resources,
    compatibilityJSON: 'v3',
    lng: deviceLanguage,
});

export default i18n;