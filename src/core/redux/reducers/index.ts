import {combineReducers} from 'redux';

import user from './user';
import weather from './weather';
import cities from './cities';

export default combineReducers({user, weather, cities});
