import React from 'react';
import {View, ViewStyle} from 'react-native';
import Slider from '@react-native-community/slider';
import COLORS from 'src/shared/constants/colors';
import CommonText from 'src/shared/components/common-text';

import styles from './styles';

interface Props {
  step: number;
  from: number;
  to: number;
  value: number;
  staticLabel: string;
  style?: ViewStyle;
  onValueChange(val: number): void;
}

const SettingsSlider: React.FC<Props> = (props) => {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.sliderLabelWrapper}>
        <CommonText style={[styles.sliderLabel, styles.sliderLabel__static]}>
          {props.staticLabel}
        </CommonText>
        <CommonText style={styles.sliderLabel}>{props.children}</CommonText>
      </View>
      <Slider
        style={styles.slider}
        value={props.value}
        onValueChange={props.onValueChange}
        step={props.step}
        minimumValue={props.from}
        maximumValue={props.to}
        minimumTrackTintColor={COLORS.ACCENT_COLOR}
        thumbTintColor="white"
        maximumTrackTintColor="gray"
      />
    </View>
  );
};

export default SettingsSlider;
