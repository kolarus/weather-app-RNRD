import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Feather from 'react-native-vector-icons/Feather';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';

import styles from './styles';

const NavigateToCitySelection = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => navigation.navigate(NAVIGATION_ROUTES.CITY_SELECTION)}>
      <Feather name="map-pin" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default NavigateToCitySelection;
