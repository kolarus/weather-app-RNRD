import React from 'react';
import {TouchableOpacity} from 'react-native';
import RainyWrapper from 'src/shared/components/rainy-wrapper';

import DayItem from './day-item';
import styles from './styles';
import {daysMock} from './mock';

const DaySelection: React.FC = () => {
  return (
    <RainyWrapper style={styles.root}>
      {daysMock.map((day) => (
        <TouchableOpacity key={day.label}>
          <DayItem dayLabel={day.label} icon={day.icon} temperatureRange={day.temperatureRange} />
        </TouchableOpacity>
      ))}
    </RainyWrapper>
  );
};

export default DaySelection;
