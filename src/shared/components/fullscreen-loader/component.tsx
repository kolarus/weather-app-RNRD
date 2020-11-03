import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Animated} from 'react-native';
import COLORS from 'src/shared/constants/colors';
import CommonText from 'src/shared/components/common-text';

import {DEFAULT_OPACITY} from './constants';
import styles from './styles';

interface Props {
  isLoading: boolean;
  description?: string;
  targetOpacity?: number;
}

const FullscreenLoader: React.FC<Props> = (props) => {
  const [showLoader, setShowLoader] = useState(props.isLoading);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const targetOpacity = props.targetOpacity || DEFAULT_OPACITY;

  const animateOpacityTo = (value: number, callback = () => {}): void => {
    Animated.timing(fadeAnim, {
      toValue: value,
      duration: 700,
      useNativeDriver: true,
    }).start(callback);
  };

  useEffect(() => {
    if (props.isLoading) {
      setShowLoader(props.isLoading);
      animateOpacityTo(targetOpacity);
    } else {
      animateOpacityTo(0, () => setShowLoader(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isLoading]);

  return showLoader ? (
    <Animated.View style={[styles.root, {opacity: fadeAnim}]}>
      <ActivityIndicator size="large" color={COLORS.LOADER_COLOR} />
      <CommonText>{props.description}</CommonText>
    </Animated.View>
  ) : null;
};

export default FullscreenLoader;
