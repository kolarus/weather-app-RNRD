import {Cities} from 'src/features/city-selection/types';
import {Weather} from 'src/shared/api/weather/types';

import {CITIES_ACTION} from '../../action-types';

export interface FetchCitiesActionPayload {
  cities: Cities;
  units: string;
}

export interface FetchCitiesAction {
  type: typeof CITIES_ACTION.FETCH_CITIES;
  payload: FetchCitiesActionPayload;
}

export interface SetCitiesAction {
  type: typeof CITIES_ACTION.SET_CITIES;
  payload: Array<Weather>;
}
