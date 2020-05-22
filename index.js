import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import HomeScreenStack from './src/screen1';

AppRegistry.registerComponent(appName, () => HomeScreenStack);
