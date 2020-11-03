import React from 'react';
import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';

import CommonText from '../common-text';
import {
  SUPER_SCRIPT_FONT_SIZE_MULTIPLIER,
  SUPER_SCRIPT_LINE_HEIGHT_MULTIPLIER,
  SUPER_SCRIPT_POSITION,
} from './constants';
import styles from './styles';
import SuperScript from './super-script';

interface Props {
  fontSize: number;
  superScript: string;
  superScriptPosition?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const TextWithSuperscript: React.FC<Props> = (props) => {
  const superScriptFontSize = props.fontSize * SUPER_SCRIPT_FONT_SIZE_MULTIPLIER;
  const superScriptLineHeight = superScriptFontSize * SUPER_SCRIPT_LINE_HEIGHT_MULTIPLIER;
  const superScriptPosition = props.superScriptPosition || SUPER_SCRIPT_POSITION.POST;

  return (
    <View style={[styles.root, props.style]}>
      {superScriptPosition === SUPER_SCRIPT_POSITION.PRE && (
        <SuperScript
          textStyle={props.textStyle}
          superScript={props.superScript}
          superScriptFontSize={superScriptFontSize}
          superScriptLineHeight={superScriptLineHeight}
        />
      )}
      <CommonText style={[props.textStyle, {fontSize: props.fontSize}]}>
        {props.children}
      </CommonText>
      {superScriptPosition === SUPER_SCRIPT_POSITION.POST && (
        <SuperScript
          textStyle={props.textStyle}
          superScript={props.superScript}
          superScriptFontSize={superScriptFontSize}
          superScriptLineHeight={superScriptLineHeight}
        />
      )}
    </View>
  );
};

export default TextWithSuperscript;
