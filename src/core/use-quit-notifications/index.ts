import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {NavigationRef} from 'src/shared/types';

const useQuitNotifications = (navigationRef: NavigationRef) => {
  useEffect(() => {
    (async () => {
      const initialNotification = await messaging().getInitialNotification();

      if (initialNotification?.data?.screenToShow) {
        navigationRef?.current?.navigate(initialNotification.data.screenToShow);
      }
    })();
  }, [navigationRef]);
};

export default useQuitNotifications;
