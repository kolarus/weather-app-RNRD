import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

interface Props {
  icon: string;
}

const WeatherDataItem: React.FC<Props> = (props) => {
  return (
    <View style={styles.root}>
      <Feather style={styles.icon} name={props.icon} size={30} color="white" />
      {props.children}
    </View>
  );
};

export default WeatherDataItem;
