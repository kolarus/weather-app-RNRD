import {WEATHER_ACTIONS} from '../action-types';
import {Action} from '../types';

const initialState = {
  ui: {
    isFetching: false,
  },
  weatherData: null,
  selectedCity: 'Kharkiv',
  selectedCountry: 'ua',
  lastUpdated: '0:00',
};

const weather = (state = initialState, action: Action) => {
  switch (action.type) {
    case WEATHER_ACTIONS.SET_WEATHER: {
      return {
        ...state,
        weatherData: action.payload,
      };
    }

    case WEATHER_ACTIONS.SET_IS_FETCHING: {
      return {
        ...state,
        lastUpdated: action.payload.isFetching ? state.lastUpdated : action.payload.lastUpdated,
        ui: {
          ...state.ui,
          isFetching: action.payload.isFetching,
        },
      };
    }

    default:
      return state;
  }
};

export default weather;
