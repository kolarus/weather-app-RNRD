import {StyleSheet} from 'react-native';
import COLORS from 'src/shared/constants/colors';

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.BACKGROUND_DEFAULT,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  inputsWrapper: {
    width: '100%',
    height: '60%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    width: '90%',
    fontSize: 18,
    color: COLORS.TEXT_DEFAULT,
    height: 50,
    paddingLeft: 20,
    marginBottom: 30,
    borderRadius: 20,
    backgroundColor: 'gray',
    fontFamily: 'PT Sans Narrow',
  },
  input__invalid: {
    borderColor: COLORS.INPUT_INVALID,
    borderWidth: 2,
  },
  loginButton: {
    width: '90%',
    marginVertical: 30,
    backgroundColor: COLORS.ACCENT_COLOR,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  loginButtonText: {
    fontSize: 30,
  },
});

export default styles;
