/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import './src/language/i18n.config';

AppRegistry.registerComponent(appName, () => App);
