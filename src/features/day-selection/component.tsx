import React from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import RainyWrapper from 'src/shared/components/rainy-wrapper';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';
import {RootState} from 'src/core/redux/types';
import {Weather} from 'src/shared/api/weather/types';

import {getAvailableDays} from './selectors';
import DayItem from './day-item';
import {Day} from './types';
import styles from './styles';

interface Props {
  weather: Nullable<Weather>;
  showWeatherFor: number;
  availableDays: Array<Day>;
}

const DaySelection: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  return (
    <RainyWrapper style={styles.root}>
      {props.availableDays.slice(0, props.showWeatherFor).map((day) => (
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
  availableDays: getAvailableDays(state),
  showWeatherFor: state.user.settings.showWeatherFor,
});

export default connect(mapStateToProps)(DaySelection);
