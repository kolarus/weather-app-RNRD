import React from 'react';
import {View, ImageBackground} from 'react-native';
import DayItem from './day-item';
import styles from './styles';
import RainyWrapper from 'src/shared/components/rainy-wrapper';
import {daysMock} from './mock';

const DaySelection: React.FC = () => {
  return (
    <RainyWrapper>
      <View style={styles.daysWrapper}>
        {daysMock.map((day) => (
          <DayItem
            key={day.label}
            dayLabel={day.label}
            icon={day.icon}
            temperatureRange={day.temperatureRange}
          />
        ))}
      </View>
    </RainyWrapper>
  );
};

export default DaySelection;
