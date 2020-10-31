import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CommonText from 'src/shared/components/common-text';

import styles from './styles';

interface Props {
  dayLabel: string;
  icon: string;
  temperatureRange: {from: number; to: number};
}

const DayItem: React.FC<Props> = (props) => {
  return (
    <View style={styles.root}>
      <View style={styles.dayColumn}>
        <CommonText style={styles.dayLabel}>{props.dayLabel}</CommonText>
      </View>
      <View style={styles.iconColumn}>
        <Feather name={props.icon} size={20} color="white" />
      </View>
      <View style={styles.temperatureColumn}>
        <CommonText style={styles.temperatureText}>{props.temperatureRange.from}</CommonText>
        <View style={styles.temperatureBar} />
        <CommonText style={styles.temperatureText}>{props.temperatureRange.to}</CommonText>
      </View>
    </View>
  );
};

export default DayItem;
