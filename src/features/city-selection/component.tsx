import React from 'react';
import {TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CityItem from './city-item';
import styles from './styles';

import {cityItems} from './mock';

const CitySelection: React.FC = () => {
  return (
    <View style={styles.root}>
      <View style={styles.search}>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} />
          <TouchableOpacity>
            <Feather name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.cityOptions}>
        {cityItems.map((city) => (
          <TouchableOpacity key={city.name}>
            <CityItem
              name={city.name}
              letter={city.letter}
              temperature={city.temperature}
              description={city.description}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CitySelection;
