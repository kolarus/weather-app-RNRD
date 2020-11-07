import React, {useState, useRef, useContext, useCallback} from 'react';
import {View, Animated, Easing, TextInput, TouchableOpacity, Keyboard, Alert} from 'react-native';
import CommonText from 'src/shared/components/common-text';
import FullscreenLoader from 'src/shared/components/fullscreen-loader';
import COLORS from 'src/shared/constants/colors';
import AuthContext from 'src/core/auth/auth-context';

import styles from './styles';

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasInvalidLoginAttempt, setHasInvalidLoginAttempt] = useState(false);
  const shakeY = useRef(new Animated.Value(0)).current;

  const shakeInputs = useCallback(() => {
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

  const handleSkipLogin = () => authContext.signIn('admin', 'admin');

  const handleLoginPress = useCallback(async () => {
    Keyboard.dismiss();
    setIsLoading(true);

    const isAuthorized = await authContext.signIn(login, password);

    if (!isAuthorized) {
      setIsLoading(false);
      setPassword('');
      shakeInputs();
      setHasInvalidLoginAttempt(true);
      Alert.alert('Login Error', 'Wrong credentials', [{text: 'OK', style: 'cancel'}]);
    }
  }, [shakeInputs, authContext, login, password]);

  return (
    <View style={styles.root}>
      <Animated.View
        style={[
          styles.inputsWrapper,
          {
            transform: [{translateY: shakeY}],
          },
        ]}>
        <TextInput
          style={[styles.input, hasInvalidLoginAttempt && styles.input__invalid]}
          placeholder="Login"
          placeholderTextColor={COLORS.TEXT_DEFAULT}
          value={login}
          autoCapitalize="none"
          onChangeText={setLogin}
        />
        <TextInput
          style={[styles.input, hasInvalidLoginAttempt && styles.input__invalid]}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          placeholderTextColor={COLORS.TEXT_DEFAULT}
          value={password}
          onChangeText={setPassword}
        />
      </Animated.View>
      <TouchableOpacity onPress={handleSkipLogin}>
        <CommonText>skip login ;)</CommonText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <CommonText style={styles.loginButtonText}>LOGIN</CommonText>
      </TouchableOpacity>
      <FullscreenLoader description="Authorization" isLoading={isLoading} />
    </View>
  );
};

export default Login;
