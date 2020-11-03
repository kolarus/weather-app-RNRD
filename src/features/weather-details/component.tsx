import React, {useContext, useEffect, useState} from 'react';
import {View, ScrollView, Animated, TouchableWithoutFeedback} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {useRoute} from '@react-navigation/core';
import dayjs from 'dayjs';
import Feather from 'react-native-vector-icons/Feather';
import RainyWrapper from 'src/shared/components/rainy-wrapper';
import CommonText from 'src/shared/components/common-text';
import TextWithSuperscript from 'src/shared/components/text-with-superscript';
import WeatherDataContext from 'src/shared/api/weather-data-context';
import getDayRangeInSeconds from 'src/shared/utils/get-day-range-in-seconds';
import getWeatherItemsByTimeRange from 'src/shared/utils/get-weather-by-time-range';
import {WeatherByTime} from 'src/shared/api/types';

import useSpinAnimation from './use-spin-animation';
import {getIconByWeather, getFormattedSunsetTime, getFormattedSunriseTime} from './utils';
import {DEFAULT_WEATHER} from './constants';
import WeatherByTimeItem from './weather-by-time-item';
import WeatherDataItem from './weather-data-item';
import styles from './styles';

interface Props {
  showForDate?: number;
}

const WeatherDetails: React.FC<Props> = ({showForDate}) => {
  const route = useRoute();
  const [visibleRange, setVisibleRange] = useState(
    getDayRangeInSeconds(route.params?.showForDate || showForDate || new Date()),
  );
  //Alert.alert('', JSON.stringify(route.params?.showForDate));
  const headerHeight = useHeaderHeight();
  const spinAnimation = useSpinAnimation();
  const {weather, lastUpdated, isFetching, refreshWeather} = useContext(WeatherDataContext);
  const weatherItemsToShow: Array<WeatherByTime> = weather
    ? getWeatherItemsByTimeRange(visibleRange, weather.list)
    : [];
  const currentWeather = weatherItemsToShow[0] || DEFAULT_WEATHER; // don't really like this
  const sunriseTime = weather ? getFormattedSunriseTime(weather) : null;
  const sunsetTime = weather ? getFormattedSunsetTime(weather) : null;

  useEffect(() => {
    if (isFetching) {
      spinAnimation.start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  useEffect(() => {
    setVisibleRange(
      getDayRangeInSeconds(route.params?.showForDate * 1000 || showForDate || new Date()),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params?.showForDate, showForDate]);

  //Alert.alert('', JSON.stringify(visibleRange))
  return (
    <RainyWrapper style={[styles.root, {paddingTop: headerHeight}]}>
      <View style={styles.timeRow}>
        <CommonText style={styles.updateTime}>{lastUpdated}</CommonText>
        <Animated.View style={{transform: [{rotate: spinAnimation.rotation}]}}>
          <TouchableWithoutFeedback onPress={refreshWeather}>
            <Feather style={styles.updateIcon} name="refresh-cw" size={20} color="white" />
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
      <View>
        <CommonText style={styles.cityName}>{weather?.city.name}</CommonText>
        <CommonText style={styles.date}>
          {dayjs(currentWeather.dt * 1000).format('dddd, MMMM, D')}
        </CommonText>
      </View>
      <View style={styles.generalWeatherDataRow}>
        <View style={styles.iconColumn}>
          <Feather
            style={styles.updateIcon}
            name={getIconByWeather(currentWeather.weather[0])}
            size={80}
            color="white"
          />
        </View>
        <View style={styles.temperatureDataColumn}>
          <TextWithSuperscript textStyle={styles.temperature} fontSize={60} superScript="o">
            {Math.round(currentWeather.main.temp)}
          </TextWithSuperscript>
          <CommonText style={styles.temperatureDescription}>
            // {currentWeather.weather[0].description}
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
              time={dayjs(weatherListItem.dt * 1000).format('H:mm')}
              temperature={Math.round(weatherListItem.main.temp)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.specificWeatherDataRow}>
        <WeatherDataItem icon="droplet">
          <CommonText fontSize={25}>{currentWeather.main.humidity}%</CommonText>
        </WeatherDataItem>
        <WeatherDataItem icon="wind">
          <TextWithSuperscript fontSize={25} superScript={'m/c'}>
            {currentWeather.wind.speed.toFixed(1)}
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
  );
};

export default WeatherDetails;
