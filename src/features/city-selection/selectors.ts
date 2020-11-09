import {RootState} from 'src/core/redux/types';

// use reselect
export const getCityItems = (state: RootState) =>
  state.cities.cities.map((city) => ({
    name: city.city.name,
    country: city.city.country,
    temperature: Math.round(city.list[0].main.temp),
    description: city.list[0].weather[0].description,
    letter: city.city.name.slice(0, 1),
  }));
