import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CommonText from 'src/shared/components/common-text';
import TextWithSuperscript from 'src/shared/components/text-with-superscript';

import styles from './styles';

interface Props {
  time: string;
  icon: string;
  temperature: number;
}

const WeatherByTimeItem: React.FC<Props> = (props) => {
  return (
    <View style={styles.root}>
      <CommonText style={styles.time}>{props.time}</CommonText>
      <Feather style={styles.icon} name={props.icon} size={30} color="white" />
      <TextWithSuperscript fontSize={25} superScript="o">
        {props.temperature}
      </TextWithSuperscript>
    </View>
  );
};

export default WeatherByTimeItem;
