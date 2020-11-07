import React from 'react';
import {ImageBackground, StyleProp, TextStyle, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

interface Props {
  style?: StyleProp<TextStyle>;
}

const RainyWrapper: React.FC<Props> = (props) => {
  return (
    <View style={[styles.root, props.style]}>
      <ImageBackground source={require('./rain-drops.png')} style={styles.image} />
      <SafeAreaView>{props.children}</SafeAreaView>
    </View>
  );
};

export default RainyWrapper;
