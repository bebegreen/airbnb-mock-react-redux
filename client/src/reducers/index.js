import { combineReducers } from 'redux';
import { booking } from './booking.js';
import { user } from './user.js';
import { location } from './location';

const rootReducer = combineReducers({
  booking,
  user,
  location
});

export default rootReducer;
