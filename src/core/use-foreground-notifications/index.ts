import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

import {NavigationRef} from './types';

const useForegroundNotifications = (navigationRef: NavigationRef) => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      const hasMessage =
        remoteMessage.notification?.title &&
        remoteMessage.notification?.body &&
        remoteMessage.data?.screenToShow;

      if (hasMessage) {
        Alert.alert(String(remoteMessage.notification?.title), '', [
          {text: 'Cancel', style: 'cancel'},
          {
            text: remoteMessage.notification?.body,
            onPress: () => {
              if (remoteMessage.data?.screenToShow) {
                navigationRef?.current?.navigate(remoteMessage.data.screenToShow);
              }
            },
          },
        ]);
      }
    });

    return unsubscribe;
  }, [navigationRef]);
};

export default useForegroundNotifications;
