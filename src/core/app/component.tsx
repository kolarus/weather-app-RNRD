import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DaySelection from 'src/features/day-selection';
import Login from 'src/features/login';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';
import AuthContext from './auth-context';
import {NO_HEADER_SCREEN_OPTIONS} from './constants';
import timeout from 'src/shared/utils/timeout';
import WeatherStackScreen from '../navigation/weather-stack-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const signIn = async (login: string, password: string): Promise<boolean> => {
    const isValidCredentials: boolean = login === 'admin' && password === 'admin';

    await timeout(3000);
    setIsAuthorized(isValidCredentials);

    return isValidCredentials;
  };

  const signOut = () => setIsAuthorized(false);

  return (
    <AuthContext.Provider value={{isAuthorized, signIn, signOut}}>
      <NavigationContainer>
        {isAuthorized ? (
          <Tab.Navigator>
            <Tab.Screen name={NAVIGATION_ROUTES.WEATHER_STACK} component={WeatherStackScreen} />
            <Tab.Screen name={NAVIGATION_ROUTES.DAY_SELECTION} component={DaySelection} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              options={NO_HEADER_SCREEN_OPTIONS}
              name={NAVIGATION_ROUTES.LOGIN}
              component={Login}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
