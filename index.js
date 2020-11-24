/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from 'src/core/app';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {name as appName} from './app.json';

// storing messages in the background, just for educational purposes, currently they are unused
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  const storedMessages = await AsyncStorage.getItem('messages');
  const currentMessages = JSON.parse(storedMessages) || [];
  const nextMessages = JSON.stringify([...currentMessages, remoteMessage]);
  await AsyncStorage.setItem('messages', nextMessages);
});

AppRegistry.registerComponent(appName, () => App);
