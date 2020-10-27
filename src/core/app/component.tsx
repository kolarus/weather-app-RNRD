import React from 'react';
import {View} from 'react-native';

import CitySelection from 'src/features/city-selection';
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
