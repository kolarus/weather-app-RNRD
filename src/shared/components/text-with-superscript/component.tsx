import React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import CommonText from '../common-text';
import {SUPER_SCRIPT_FONT_SIZE_MULTIPLIER, SUPER_SCRIPT_LINE_HEIGHT_MULTIPLIER} from './constants';
import styles from './styles';

interface Props {
  fontSize: number;
  superScript: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const TextWithSuperscript: React.FC<Props> = (props) => {
  const superScriptFontSize = props.fontSize * SUPER_SCRIPT_FONT_SIZE_MULTIPLIER;

  const superScriptLineHeight = superScriptFontSize * SUPER_SCRIPT_LINE_HEIGHT_MULTIPLIER;

  return (
    <View style={[styles.root, props.style]}>
      <CommonText style={[props.textStyle, {fontSize: props.fontSize}]}>
        {props.children}
      </CommonText>
      <CommonText
        style={{
          fontSize: superScriptFontSize,
          lineHeight: superScriptLineHeight,
        }}>
        {props.superScript}
      </CommonText>
    </View>
  );
};

export default TextWithSuperscript;
