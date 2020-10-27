import React from 'react';
import {View} from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CitySelection from 'src/features/city-selection';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import DaySelection from 'src/features/day-selection';
import WeatherDetails from 'src/features/weather-details';

const App: React.FC = () => (
  <View>
    {/*<CitySelection />*/}
    {/*<DaySelection />*/}
    <WeatherDetails />
  </View>
);

export default App;
