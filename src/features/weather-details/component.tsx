import React from 'react';
import {View, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RainyWrapper from 'src/shared/components/rainy-wrapper';
import CommonText from 'src/shared/components/common-text';
import TextWithSuperscript from 'src/shared/components/text-with-superscript';
import WeatherByTime from './weather-by-time';
import WeatherDataItem from './weather-data-item';
import styles from './styles';

import {weatherByTime} from './mock';

const WeatherDetails: React.FC = () => {
  return (
    <RainyWrapper style={styles.root}>
      <View style={styles.timeRow}>
        <CommonText style={styles.updateTime}>10:19</CommonText>
        <Feather
          style={styles.updateIcon}
          name="refresh-cw"
          size={20}
          color="white"
        />
      </View>
      <View>
        <CommonText style={styles.cityName}>kharkiv</CommonText>
        <CommonText style={styles.date}>monday, november 3</CommonText>
      </View>
      <View style={styles.generalWeatherDataRow}>
        <View style={styles.iconColumn}>
          <Feather
            style={styles.updateIcon}
            name="cloud-snow"
            size={80}
            color="white"
          />
        </View>
        <View style={styles.temperatureDataColumn}>
          <TextWithSuperscript
            textStyle={styles.temperature}
            fontSize={60}
            superScript="o">
            -2
          </TextWithSuperscript>
          <CommonText style={styles.temperatureDescription}>
            // mostly cloudy
          </CommonText>
        </View>
        <View style={styles.sunsetColumn}>
          <Feather name="moon" size={30} color="white" />
          <CommonText style={styles.sunsetTime}>6:20</CommonText>
        </View>
      </View>
      <View style={styles.weatherByTimeRow}>
        <ScrollView horizontal>
          {weatherByTime.map((weather) => (
            <WeatherByTime
              key={weather.time}
              isSelected={weather.isSelected}
              icon={weather.icon}
              time={weather.time}
              temperature={weather.temperature}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.specificWeatherDataRow}>
        <WeatherDataItem icon="droplet">
          <CommonText fontSize={25}>50%</CommonText>
        </WeatherDataItem>
        <WeatherDataItem icon="wind">
          <TextWithSuperscript fontSize={25} superScript={'m/c'}>
            5
          </TextWithSuperscript>
        </WeatherDataItem>
        <WeatherDataItem icon="sunrise">
          <CommonText fontSize={25}>6:20</CommonText>
        </WeatherDataItem>
        <WeatherDataItem icon="sunset">
          <CommonText fontSize={25}>16:20</CommonText>
        </WeatherDataItem>
      </View>
    </RainyWrapper>
  );
};

export default WeatherDetails;
