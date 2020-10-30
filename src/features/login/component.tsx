import React, {useState, useContext} from 'react';
import {View, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import CommonText from 'src/shared/components/common-text';
import COLORS from 'src/shared/constants/colors';
import AuthContext from 'src/core/app/auth-context';
import styles from './styles';

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasInvalidLoginAttempt, setHasInvalidLoginAttempt] = useState(false);

  const handleLoginPress = async () => {
    setIsLoading(true);

    const isAuthorized = await authContext.signIn(login, password);

    if (!isAuthorized) {
      setIsLoading(false);
      setHasInvalidLoginAttempt(true);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.inputsWrapper}>
        <TextInput
          style={[styles.input, hasInvalidLoginAttempt && styles.input__invalid]}
          placeholder="Login"
          placeholderTextColor={COLORS.TEXT_DEFAULT}
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={[styles.input, hasInvalidLoginAttempt && styles.input__invalid]}
          placeholder="Password"
          secureTextEntry={Boolean(password)}
          placeholderTextColor={COLORS.TEXT_DEFAULT}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <CommonText style={styles.loginButtonText}>LOGIN</CommonText>
      </TouchableOpacity>
      {isLoading && (
        <View style={styles.loader}>
          {/*CREATE A FULLSCREEN LOADER COMPONENT*/}
          <ActivityIndicator size="large" color={COLORS.LOADER_COLOR} />
        </View>
      )}
    </View>
  );
};

export default Login;
