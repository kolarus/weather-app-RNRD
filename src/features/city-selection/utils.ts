import {CityItemType} from './types';

export const filterItemsBySearchString = (cityItems: Array<CityItemType>, searchString: string) =>
  cityItems.filter((city) => city.name.toUpperCase().startsWith(searchString.toUpperCase()));
