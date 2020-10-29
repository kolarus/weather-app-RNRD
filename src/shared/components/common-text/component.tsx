import React from 'react';
import {Text, TextStyle, StyleProp} from 'react-native';
import styles from './styles';

interface Props {
  style?: StyleProp<TextStyle>;
  fontSize?: number;
}

const CommonText: React.FC<Props> = (props) => {
  const fontSize = props.fontSize && {fontSize: props.fontSize};

  return (
    <Text style={[styles.root, props.style, {...fontSize}]}>
      {props.children}
    </Text>
  );
};

export default CommonText;
