import React, {useCallback, useEffect, useState} from 'react';
import {View, ScrollView, Animated, TouchableWithoutFeedback} from 'react-native';
import {useDispatch, connect} from 'react-redux';
import {useHeaderHeight} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useRoute} from '@react-navigation/core';
import dayjs from 'dayjs';
import Feather from 'react-native-vector-icons/Feather';
import RainyWrapper from 'src/shared/components/rainy-wrapper';
import CommonText from 'src/shared/components/common-text';
import TextWithSuperscript from 'src/shared/components/text-with-superscript';
import getWeatherItemsForDay from 'src/shared/utils/get-weather-items-for-day';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';
import {RoutesParamList} from 'src/shared/types';
import FullscreenLoader from 'src/shared/components/fullscreen-loader';
import {Weather} from 'src/shared/api/weather/types';
import {fetchWeather} from 'src/core/redux/actions/weather';
import {RootState} from 'src/core/redux/types';

import useSpinAnimation from './use-spin-animation';
import {
  getIconByWeather,
  getFormattedSunsetTime,
  getFormattedSunriseTime,
  secondsToHmm,
} from './utils';
import WeatherByTimeItem from './weather-by-time-item';
import WeatherDataItem from './weather-data-item';
import styles from './styles';

interface Props {
  weather: Nullable<Weather>;
  isFetching: boolean;
  lastUpdated: string;
  selectedCity: string;
  selectedCountry: string;
  units: string;
}

const WeatherDetails: React.FC<Props> = (props) => {
  const {isFetching, lastUpdated} = props;
  const dispatch = useDispatch();
  const headerHeight = useHeaderHeight();
  const spinAnimation = useSpinAnimation();
  const route: RouteProp<RoutesParamList, typeof NAVIGATION_ROUTES.WEATHER_DETAILS> = useRoute();
  const showForTime = route.params?.showForTime * 1000;
  const [weatherItemsToShow, setWeatherItemsToShow] = useState(() =>
    props.weather ? getWeatherItemsForDay(showForTime, props.weather.list) : [],
  );
  const sunriseTime = props.weather ? getFormattedSunriseTime(props.weather) : null;
  const sunsetTime = props.weather ? getFormattedSunsetTime(props.weather) : null;

  const refetchWeather = useCallback(() => {
    dispatch(
      fetchWeather({city: props.selectedCity, country: props.selectedCountry, units: props.units}),
    );
  }, [dispatch, props.selectedCity, props.selectedCountry, props.units]);

  useEffect(() => {
    if (isFetching) {
      spinAnimation.start();
    }
  }, [isFetching, spinAnimation]);

  useEffect(() => {
    console.log('useEffec');
    dispatch(
      fetchWeather({
        city: props.selectedCity,
        country: props.selectedCountry,
        units: props.units,
      }),
    );
  }, [dispatch, props.selectedCity, props.selectedCountry, props.units]);

  useEffect(() => {
    if (props.weather) {
      setWeatherItemsToShow(getWeatherItemsForDay(showForTime, props.weather.list));
    }
  }, [showForTime, props.weather]);

  return weatherItemsToShow.length > 0 ? (
    <RainyWrapper style={[styles.root, {paddingTop: headerHeight}]}>
      <View style={styles.timeRow}>
        <CommonText style={styles.updateTime}>{lastUpdated}</CommonText>
        <Animated.View style={{transform: [{rotate: spinAnimation.rotation}]}}>
          <TouchableWithoutFeedback onPress={refetchWeather}>
            <Feather style={styles.updateIcon} name="refresh-cw" size={20} color="white" />
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
      <View style={styles.cityAndDateRow}>
        <CommonText style={styles.cityName}>{props.weather?.city.name}</CommonText>
        <CommonText style={styles.date}>
          {dayjs(weatherItemsToShow[0].dt * 1000).format('dddd, MMMM, D')}
        </CommonText>
      </View>
      <View style={styles.generalWeatherDataRow}>
        <View style={styles.iconColumn}>
          <Feather
            style={styles.updateIcon}
            name={getIconByWeather(weatherItemsToShow[0].weather[0])}
            size={80}
            color="white"
          />
        </View>
        <View style={styles.temperatureDataColumn}>
          <TextWithSuperscript textStyle={styles.temperature} fontSize={60} superScript="o">
            {Math.round(weatherItemsToShow[0].main.temp)}
          </TextWithSuperscript>
          <CommonText style={styles.temperatureDescription}>
            // {weatherItemsToShow[0].weather[0].description}
          </CommonText>
        </View>
        <View style={styles.sunsetColumn}>
          <Feather name="moon" size={30} color="white" />
          <CommonText style={styles.sunsetTime}>{sunsetTime}</CommonText>
        </View>
      </View>
      <View style={styles.weatherByTimeRow}>
        <ScrollView horizontal>
          {weatherItemsToShow.map((weatherListItem) => (
            <WeatherByTimeItem
              key={weatherListItem.dt}
              icon={getIconByWeather(weatherListItem.weather[0])}
              time={secondsToHmm(weatherListItem.dt)}
              temperature={Math.round(weatherListItem.main.temp)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.specificWeatherDataRow}>
        <WeatherDataItem icon="droplet">
          <CommonText fontSize={25}>{weatherItemsToShow[0].main.humidity}%</CommonText>
        </WeatherDataItem>
        <WeatherDataItem icon="wind">
          <TextWithSuperscript fontSize={25} superScript={'m/c'}>
            {weatherItemsToShow[0].wind.speed.toFixed(1)}
          </TextWithSuperscript>
        </WeatherDataItem>
        <WeatherDataItem icon="sunrise">
          <CommonText fontSize={25}>{sunriseTime}</CommonText>
        </WeatherDataItem>
        <WeatherDataItem icon="sunset">
          <CommonText fontSize={25}>{sunsetTime}</CommonText>
        </WeatherDataItem>
      </View>
    </RainyWrapper>
  ) : (
    <FullscreenLoader targetOpacity={1} description="Loading weather" isLoading={true} />
  );
};

const mapStateToProps = (state: RootState) => ({
  weather: state.weather.weatherData,
  isFetching: state.weather.ui.isFetching,
  lastUpdated: state.weather.lastUpdated,
  selectedCity: state.weather.selectedCity,
  selectedCountry: state.weather.selectedCountry,
  units: state.user.settings.units,
});

export default connect(mapStateToProps)(WeatherDetails);
