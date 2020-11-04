import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import RainyWrapper from 'src/shared/components/rainy-wrapper';
import WeatherDataContext from 'src/shared/api/weather-data-context';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';

import {getAvailableDays} from './utils';
import DayItem from './day-item';
import styles from './styles';

const DaySelection: React.FC = () => {
  const navigation = useNavigation();
  const {weather} = useContext(WeatherDataContext);
  const [availableDays, setAvailableDays] = useState(() =>
    weather ? getAvailableDays(weather) : [],
  );

  useEffect(() => {
    if (weather) {
      setAvailableDays(getAvailableDays(weather));
    }
  }, [weather]);

  return (
    <RainyWrapper style={styles.root}>
      {availableDays.map((day) => (
        <TouchableOpacity
          key={day.label}
          onPress={() =>
            navigation.navigate(NAVIGATION_ROUTES.WEATHER_DETAILS, {showForTime: day.dt})
          }>
          <DayItem dayLabel={day.label} icon={day.icon} temperatureRange={day.temperatureRange} />
        </TouchableOpacity>
      ))}
    </RainyWrapper>
  );
};

export default DaySelection;
