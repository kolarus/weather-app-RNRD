import {Animated} from 'react-native';
import {useRef} from 'react';

const useSpinAnimation = () => {
  const refreshAnim = useRef(new Animated.Value(1)).current;

  const start = () => {
    Animated.timing(refreshAnim, {
      toValue: 360,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => refreshAnim.setValue(1));
  };

  const interpolatedRotation = refreshAnim.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return {rotation: interpolatedRotation, start};
};

export default useSpinAnimation;
