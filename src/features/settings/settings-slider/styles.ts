import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignItems: 'center',
  },
  slider: {
    width: '90%',
    height: 40,
  },
  sliderLabelWrapper: {
    flexDirection: 'row',
    width: '83%',
    justifyContent: 'space-between',
  },
  sliderLabel: {
    fontFamily: 'PT Sans Narrow',
    fontSize: 23,
  },
  sliderLabel__static: {
    opacity: 0.7,
    color: 'gray',
    textTransform: 'uppercase',
  },
});

export default styles;
