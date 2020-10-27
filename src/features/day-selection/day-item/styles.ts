import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: 80,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  dayColumn: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dayLabel: {
    fontSize: 25,
  },
  iconColumn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  temperatureColumn: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperatureText: {
    padding: 5,
    fontSize: 20,
  },
  temperatureBar: {
    backgroundColor: 'white',
    height: 20,
    width: 100,
    overflow: 'hidden',
    borderRadius: 10,
  },
});

export default styles;
