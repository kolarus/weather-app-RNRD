import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import RainyWrapper from 'src/shared/components/rainy-wrapper';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';
import {RootState} from 'src/core/redux/types';
import {Weather} from 'src/shared/api/weather/types';

import {getAvailableDays} from './utils';
import DayItem from './day-item';
import styles from './styles';

interface Props {
  weather: Nullable<Weather>;
}

const DaySelection: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const [availableDays, setAvailableDays] = useState(() =>
    props.weather ? getAvailableDays(props.weather) : [],
  );

  useEffect(() => {
    if (props.weather) {
      setAvailableDays(getAvailableDays(props.weather));
    }
  }, [props.weather]);

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

const mapStateToProps = (state: RootState) => ({
  weather: state.weather.weatherData,
});

export default connect(mapStateToProps)(DaySelection);
