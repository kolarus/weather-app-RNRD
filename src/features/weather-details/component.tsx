import React, {useContext, useEffect, useState} from 'react';
import {View, ScrollView, Animated, TouchableWithoutFeedback} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useRoute} from '@react-navigation/core';
import dayjs from 'dayjs';
import Feather from 'react-native-vector-icons/Feather';
import RainyWrapper from 'src/shared/components/rainy-wrapper';
import CommonText from 'src/shared/components/common-text';
import TextWithSuperscript from 'src/shared/components/text-with-superscript';
import WeatherDataContext from 'src/shared/api/weather-data-context';
import getWeatherItemsForDay from 'src/shared/utils/get-weather-items-for-day';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';
import {RoutesParamList} from 'src/shared/types';
import FullscreenLoader from 'src/shared/components/fullscreen-loader';

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

const WeatherDetails: React.FC = () => {
  const headerHeight = useHeaderHeight();
  const spinAnimation = useSpinAnimation();
  const route: RouteProp<RoutesParamList, typeof NAVIGATION_ROUTES.WEATHER_DETAILS> = useRoute();
  const {weather, lastUpdated, isFetching, refreshWeather} = useContext(WeatherDataContext);
  const showForTime = route.params?.showForTime * 1000;
  const [weatherItemsToShow, setWeatherItemsToShow] = useState(() =>
    weather ? getWeatherItemsForDay(showForTime, weather.list) : [],
  );
  const sunriseTime = weather ? getFormattedSunriseTime(weather) : null;
  const sunsetTime = weather ? getFormattedSunsetTime(weather) : null;

  useEffect(() => {
    if (isFetching) {
      spinAnimation.start();
    }
  }, [isFetching, spinAnimation]);

  useEffect(() => {
    if (weather) {
      setWeatherItemsToShow(getWeatherItemsForDay(showForTime, weather.list));
    }
  }, [showForTime, weather]);

  return weatherItemsToShow.length > 0 ? (
    <RainyWrapper style={[styles.root, {paddingTop: headerHeight}]}>
      <View style={styles.timeRow}>
        <CommonText style={styles.updateTime}>{lastUpdated}</CommonText>
        <Animated.View style={{transform: [{rotate: spinAnimation.rotation}]}}>
          <TouchableWithoutFeedback onPress={() => refreshWeather()}>
            <Feather style={styles.updateIcon} name="refresh-cw" size={20} color="white" />
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
      <View style={styles.cityAndDateRow}>
        <CommonText style={styles.cityName}>{weather?.city.name}</CommonText>
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

export default WeatherDetails;
