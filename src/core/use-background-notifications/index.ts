import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {NavigationRef} from 'src/shared/types';

const useBackgroundNotifications = (navigationRef: NavigationRef) => {
  useEffect(() => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      if (remoteMessage.data?.screenToShow) {
        navigationRef?.current?.navigate(remoteMessage.data.screenToShow);
      }
    });
  }, [navigationRef]);
};

export default useBackgroundNotifications;
