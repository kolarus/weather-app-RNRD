import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import WeatherDetails from 'src/features/weather-details';
import CitySelection from 'src/features/city-selection';
import Settings from 'src/features/settings';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';
import {CHEVRON_BACK_BUTTON_SCREEN_OPTIONS} from './constants';
import COLORS from 'src/shared/constants/colors';

const WeatherStack = createStackNavigator();

const WeatherStackScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <WeatherStack.Navigator>
      {/*useHeaderHeight with transparent header for better results*/}
      <WeatherStack.Screen
        options={{
          title: '',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION_ROUTES.CITY_SELECTION)}>
              <Feather name="map-pin" size={30} color="red" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION_ROUTES.SETTINGS)}>
              <Feather name="settings" size={30} color="red" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: COLORS.BACKGROUND_DEFAULT,
          },
        }}
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
