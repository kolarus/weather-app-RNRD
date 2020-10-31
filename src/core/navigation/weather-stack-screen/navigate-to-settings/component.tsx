import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Feather from 'react-native-vector-icons/Feather';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';

import styles from './styles';

const NavigateToSettings = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => navigation.navigate(NAVIGATION_ROUTES.SETTINGS)}>
      <Feather name="settings" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default NavigateToSettings;
