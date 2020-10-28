import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#080b24',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: '3%',
    paddingTop: '1%',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  updateTime: {
    fontFamily: 'PTSansNarrow',
    fontSize: 20,
  },
  updateIcon: {
    marginLeft: 10,
  },
  cityName: {
    fontFamily: 'PTSansNarrow',
    letterSpacing: 10,
    fontSize: 50,
    marginLeft: -5,
    textTransform: 'uppercase',
  },
  date: {
    fontFamily: 'PTSansNarrow',
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
  temperatureColumn: {
    flex: 3,
    flexDirection: 'row',
  },
  sunsetColumn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  temperature: {
    fontFamily: 'PTSansNarrow',
  },
  temperatureSuperScript: {
    fontSize: 30,
    lineHeight: 30,
  },
  temperatureDescription: {
    fontFamily: 'PTSansNarrow',
    fontSize: 13,
    marginLeft: 10,
    textTransform: 'uppercase',
  },
  sunsetTime: {
    fontFamily: 'PTSansNarrow',
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
