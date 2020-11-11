import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {TextInput, View, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';
import {setCity} from 'src/core/redux/actions/weather';
import {fetchCities} from 'src/core/redux/actions/cities';
import COLORS from 'src/shared/constants/colors';
import {RootState} from 'src/core/redux/types';

import {getCityItems} from './selectors';
import CITIES from './cities';
import CityItem from './city-item';
import {CityItemType} from './types';
import {filterItemsBySearchString} from './utils';
import styles from './styles';

interface Props {
  cityItems: Array<CityItemType>;
  isFetching: boolean;
  units: string;
  fetchedUnits: string;
}

const CitySelection: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [list, setList] = useState(props.cityItems);
  const [searchString, setSearchString] = useState('');

  const onRefresh = React.useCallback(() => {
    setSearchString('');
    dispatch(fetchCities({cities: CITIES, units: props.units}));
  }, [dispatch, props.units]);

  const getCityItemPressHandler = useCallback(
    (city, country) => () => {
      dispatch(setCity({city, country}));
      navigation.navigate(NAVIGATION_ROUTES.WEATHER_DETAILS, {showForTime: null});
    },
    [dispatch, navigation],
  );

  const handleSearch = useCallback(
    (string: string) => {
      setSearchString(string);
      setList(filterItemsBySearchString(props.cityItems, string));
    },
    [props.cityItems],
  );

  useEffect(() => {
    handleSearch(searchString);
  }, [handleSearch, searchString]);

  useEffect(() => {
    const notFetched = props.cityItems.length === 0;
    const unitsChanged = props.fetchedUnits && props.units !== props.fetchedUnits;
    const shouldFetchCities = (notFetched || unitsChanged) && !props.isFetching;

    if (shouldFetchCities) {
      dispatch(fetchCities({cities: CITIES, units: props.units}));
    }
  }, [dispatch, props.cityItems, props.fetchedUnits, props.isFetching, props.units]);

  return (
    <View style={styles.root}>
      <View style={styles.search}>
        <View style={styles.inputWrapper}>
          <TextInput onChangeText={handleSearch} value={searchString} style={styles.input} />
          <TouchableOpacity>
            <Feather name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            tintColor={COLORS.LOADER_COLOR}
            refreshing={props.isFetching}
            onRefresh={onRefresh}
          />
        }
        style={styles.cityOptions}>
        {list.map((city) => (
          <TouchableOpacity
            key={city.name}
            onPress={getCityItemPressHandler(city.name, city.country)}>
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

const mapStateToProps = (state: RootState) => ({
  fetchedUnits: state.cities.fetchedUnits,
  isFetching: state.cities.ui.isFetching,
  units: state.user.settings.units,
  cityItems: getCityItems(state),
});

export default connect(mapStateToProps)(CitySelection);
