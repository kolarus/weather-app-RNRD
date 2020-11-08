import {Animated, Easing} from 'react-native';
import {useCallback, useRef} from 'react';

const useShakeInputAnimation = () => {
  const shakeY = useRef(new Animated.Value(0)).current;

  const start = useCallback(() => {
    Animated.sequence([
      Animated.timing(shakeY, {
        toValue: -5,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.spring(shakeY, {
        toValue: 0,
        friction: 2,
        useNativeDriver: true,
      }),
    ]).start();
  }, [shakeY]);

  return {positionY: shakeY, start};
};

export default useShakeInputAnimation;
