import React, {useState, useCallback, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Animated, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import * as Keychain from 'react-native-keychain';
import CommonText from 'src/shared/components/common-text';
import FullscreenLoader from 'src/shared/components/fullscreen-loader';
import COLORS from 'src/shared/constants/colors';
import {requestUserSignIn} from 'src/core/redux/actions/user';
import {RootState} from 'src/core/redux/types';
import {RequestSignInPayload} from 'src/core/redux/actions/user/types';

import useShakeInputAnimation from './use-shake-input-animation';
import styles from './styles';

interface Props {
  isAuthorized: boolean;
  isAuthorizationInProgress: boolean;
  hasInvalidLoginAttempt: boolean;
  requestUserSignIn(payload: RequestSignInPayload): void;
}

const Login: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const shakeInputAnimation = useShakeInputAnimation();
  const startShakeInputAnimation = shakeInputAnimation.start;

  useEffect(() => {
    (async () => {
      const credentials = await Keychain.getGenericPassword();

      if (credentials) {
        setLogin(credentials.username);
      }
    })();
  }, []);

  useEffect(() => {
    if (props.hasInvalidLoginAttempt) {
      startShakeInputAnimation();
    }
  }, [startShakeInputAnimation, props.hasInvalidLoginAttempt]);

  const handleLoginPress = useCallback(async () => {
    Keyboard.dismiss();
    dispatch(requestUserSignIn({login, password}));
  }, [dispatch, login, password]);

  return (
    <View style={styles.root}>
      <Animated.View
        style={[
          styles.inputsWrapper,
          {
            transform: [{translateY: shakeInputAnimation.positionY}],
          },
        ]}>
        <TextInput
          style={[styles.input, props.hasInvalidLoginAttempt && styles.input__invalid]}
          placeholder="Login"
          placeholderTextColor={COLORS.TEXT_DEFAULT}
          value={login}
          autoCapitalize="none"
          onChangeText={setLogin}
        />
        <TextInput
          style={[styles.input, props.hasInvalidLoginAttempt && styles.input__invalid]}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          placeholderTextColor={COLORS.TEXT_DEFAULT}
          value={password}
          onChangeText={setPassword}
        />
      </Animated.View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <CommonText style={styles.loginButtonText}>LOGIN</CommonText>
      </TouchableOpacity>
      <FullscreenLoader description="Authorization" isLoading={props.isAuthorizationInProgress} />
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthorized: state.user.isAuthorized,
  isAuthorizationInProgress: state.user.ui.isAuthorizationInProgress,
  hasInvalidLoginAttempt: state.user.ui.hasInvalidLoginAttempt,
});

export default connect(mapStateToProps)(Login);
