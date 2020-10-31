import {StyleSheet} from 'react-native';
import COLORS from 'src/shared/constants/colors';

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.BACKGROUND_DEFAULT,
    height: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    color: COLORS.TEXT_DEFAULT,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
  daysSlider: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingTop: 30,
    paddingBottom: 50,
    marginTop: 50,
  },
  minsSlider: {
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingTop: 30,
    paddingBottom: 50,
  },
});

export default styles;
