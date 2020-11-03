import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import CommonText from 'src/shared/components/common-text';

interface Props {
  superScript: string;
  superScriptLineHeight: number;
  superScriptFontSize: number;
  textStyle?: StyleProp<TextStyle>;
}

const SuperScript: React.FC<Props> = (props) => (
  <CommonText
    style={[
      {
        fontSize: props.superScriptFontSize,
        lineHeight: props.superScriptLineHeight,
      },
      props.textStyle,
    ]}>
    {props.superScript}
  </CommonText>
);

export default SuperScript;
