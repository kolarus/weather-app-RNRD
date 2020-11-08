import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';
import DaySelection from 'src/features/day-selection';
import Login from 'src/features/login/component';
import WeatherDataContextProvider from 'src/shared/api/weather/weather-data-context-provider';

import {HEADER_NAVIGATION_HIDDEN, NAVIGATION_THEME, TAB_NAVIGATION_OPTIONS} from './constants';
import {getWeatherOptions} from './utils';
import WeatherStackScreen from './weather-stack-screen';
import {RootState} from '../redux/types';

interface Props {
  isAuthorized: boolean;
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation: React.FC<Props> = (props) => {
  return (
    <NavigationContainer theme={NAVIGATION_THEME}>
      {props.isAuthorized ? (
        <WeatherDataContextProvider>
          <Tab.Navigator tabBarOptions={TAB_NAVIGATION_OPTIONS}>
            <Tab.Screen
              options={getWeatherOptions}
              name={NAVIGATION_ROUTES.WEATHER_STACK}
              component={WeatherStackScreen}
            />
            <Tab.Screen
              options={{title: 'FORECAST'}}
              name={NAVIGATION_ROUTES.DAY_SELECTION}
              component={DaySelection}
            />
          </Tab.Navigator>
        </WeatherDataContextProvider>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={HEADER_NAVIGATION_HIDDEN}
            name={NAVIGATION_ROUTES.LOGIN}
            component={Login}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: RootState) => ({isAuthorized: state.user.isAuthorized});

export default connect(mapStateToProps)(Navigation);
