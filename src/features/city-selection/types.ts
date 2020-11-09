export interface City {
  name: string;
  country: string;
}

export type Cities = Array<City>;

export interface CityItemType extends City {
  temperature: string;
  description: string;
  letter: string;
}
