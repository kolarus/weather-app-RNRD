import React from 'react';
import {ImageBackground, View, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  style?: ViewStyle;
}

const RainyWrapper: React.FC<Props> = (props) => {
  return (
    <View style={[styles.root, props.style]}>
      <ImageBackground
        source={require('./rain-drops.png')}
        style={styles.image}
      />
      {props.children}
    </View>
  );
};

export default RainyWrapper;
