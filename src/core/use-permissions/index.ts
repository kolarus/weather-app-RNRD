import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

const usePermissions = () => {
  useEffect(() => {
    (async () => {
      // asking for permissions on IOS, but in order for push notifications to work I still need developer account for 99USD :(
      await messaging().requestPermission();
    })();
  }, []);
};

export default usePermissions;
