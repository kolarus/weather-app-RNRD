import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#080b24',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: '3%',
  },
  timeRow: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cityAndDateRow: {
    paddingHorizontal: 10,
  },
  updateTime: {
    fontFamily: 'PT Sans Narrow',
    fontSize: 20,
  },
  updateIcon: {
    marginHorizontal: 10,
  },
  cityName: {
    fontFamily: 'PT Sans Narrow',
    letterSpacing: 10,
    fontSize: 50,
    marginLeft: -5,
    textTransform: 'uppercase',
  },
  date: {
    fontFamily: 'PT Sans Narrow',
    letterSpacing: 5,
    marginLeft: -2,
    fontSize: 25,
    textTransform: 'uppercase',
  },
  generalWeatherDataRow: {
    marginTop: 50,
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 50,
  },
  iconColumn: {
    flex: 2,
    justifyContent: 'center',
  },
  temperatureDataColumn: {
    flex: 3,
    flexDirection: 'column',
  },
  sunsetColumn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  temperature: {
    fontFamily: 'PT Sans Narrow',
  },
  temperatureDescription: {
    fontFamily: 'PT Sans Narrow',
    fontSize: 13,
    marginLeft: 10,
    textTransform: 'uppercase',
  },
  sunsetTime: {
    fontFamily: 'PT Sans Narrow',
    fontSize: 20,
    marginTop: 10,
  },
  weatherByTimeRow: {
    height: 120,
  },
  specificWeatherDataRow: {
    flexDirection: 'row',
  },
});

export default styles;
