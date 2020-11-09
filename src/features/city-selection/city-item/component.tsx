import React from 'react';
import {View} from 'react-native';
import CommonText from 'src/shared/components/common-text';
import TextWithSuperscript from 'src/shared/components/text-with-superscript';

import styles from './styles';

interface Props {
  letter: string;
  temperature: string;
  name: string;
  description: string;
}

const CityItem: React.FC<Props> = (props) => {
  return (
    <View style={styles.root}>
      <View style={styles.leftColumn}>
        <CommonText style={styles.indexLetter}>{props.letter}</CommonText>
        <TextWithSuperscript style={styles.temperature} fontSize={60} superScript="o">
          {props.temperature}
        </TextWithSuperscript>
      </View>
      <View style={styles.rightColumn}>
        <CommonText style={styles.cityName}>{props.name}</CommonText>
        <CommonText style={styles.weatherInfo}>// {props.description}</CommonText>
      </View>
    </View>
  );
};

export default CityItem;
