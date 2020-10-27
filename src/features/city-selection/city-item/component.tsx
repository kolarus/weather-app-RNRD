import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import CommonText from 'src/shared/components/common-text';

import styles from './styles';

interface Props {
  letter: string;
  temperature: string;
  name: string;
  description: string;
}

const CityItem: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.root}>
        <View style={styles.leftColumn}>
          <CommonText style={styles.indexLetter}>{props.letter}</CommonText>
          <CommonText style={styles.temperature}>
            {props.temperature}
          </CommonText>
          <CommonText style={styles.temperatureSuperScript}>o</CommonText>
        </View>
        <View style={styles.rightColumn}>
          <CommonText style={styles.cityName}>{props.name}</CommonText>
          <CommonText style={styles.weatherInfo}>
            {props.description}
          </CommonText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CityItem;
