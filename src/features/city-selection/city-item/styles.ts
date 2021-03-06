import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: 100,
    marginTop: 30,
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
  },
  leftColumn: {
    flex: 1,
    flexDirection: 'row',
  },
  rightColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  indexLetter: {
    fontSize: 70,
    width: 55,
    marginHorizontal: 10,
    opacity: 0.5,
    textTransform: 'uppercase',
  },
  temperature: {
    transform: [{translateY: -10}],
  },
  cityName: {
    fontSize: 25,
  },
  weatherInfo: {
    color: 'gray',
    textTransform: 'uppercase',
  },
});

export default styles;
