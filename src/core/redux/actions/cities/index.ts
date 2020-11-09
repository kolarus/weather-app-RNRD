import {Weather} from 'src/shared/api/weather/types';

import {CITIES_ACTION} from '../../action-types';
import {FetchCitiesAction, SetCitiesAction, FetchCitiesActionPayload} from './types';
import {Action} from '../../types';

export const setCitiesFetching = (payload: boolean): Action => ({
  type: CITIES_ACTION.SET_IS_FETCHING,
  payload,
});

export const fetchCities = (payload: FetchCitiesActionPayload): FetchCitiesAction => ({
  type: CITIES_ACTION.FETCH_CITIES,
  payload,
});

export const setCities = (payload: Array<Weather>): SetCitiesAction => ({
  type: CITIES_ACTION.SET_CITIES,
  payload,
});
