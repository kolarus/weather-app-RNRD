import {CITIES_ACTION} from '../action-types';
import {Action} from '../types';

const initialState = {
  ui: {
    isFetching: false,
  },
  cities: [],
  fetchedUnits: '',
};

const cities = (state = initialState, action: Action) => {
  switch (action.type) {
    case CITIES_ACTION.SET_CITIES: {
      return {
        ...state,
        cities: action.payload,
      };
    }

    case CITIES_ACTION.SET_FETCHED_UNITS: {
      return {
        ...state,
        fetchedUnits: action.payload,
      };
    }

    case CITIES_ACTION.SET_IS_FETCHING: {
      return {
        ...state,
        ui: {
          ...state.ui,
          isFetching: action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export default cities;
