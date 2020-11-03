import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WeatherDetails from 'src/features/weather-details';
import CitySelection from 'src/features/city-selection';
import Settings from 'src/features/settings';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';

import {CHEVRON_BACK_BUTTON_SCREEN_OPTIONS, HEADER_NAVIGATION_OPTIONS} from './constants';

const WeatherStack = createStackNavigator();

const WeatherStackScreen: React.FC = () => {
  return (
    <WeatherStack.Navigator>
      <WeatherStack.Screen
        options={HEADER_NAVIGATION_OPTIONS}
        name={NAVIGATION_ROUTES.WEATHER_DETAILS}
        component={WeatherDetails}
      />
      <WeatherStack.Screen
        options={CHEVRON_BACK_BUTTON_SCREEN_OPTIONS}
        name={NAVIGATION_ROUTES.CITY_SELECTION}
        component={CitySelection}
      />
      <WeatherStack.Screen
        options={CHEVRON_BACK_BUTTON_SCREEN_OPTIONS}
        name={NAVIGATION_ROUTES.SETTINGS}
        component={Settings}
      />
    </WeatherStack.Navigator>
  );
};

export default WeatherStackScreen;
