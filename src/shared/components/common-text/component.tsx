import React from 'react';
import {Text, TextStyle} from 'react-native';
import styles from './styles';

interface Props {
  style?: TextStyle;
}

const CommonText: React.FC<Props> = (props) => {
  return <Text style={[styles.root, props.style]}>{props.children}</Text>;
};

export default CommonText;
