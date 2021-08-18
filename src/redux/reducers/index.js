import { combineReducers } from 'redux';
// reducers
import { calendarReducer } from './calendarReducer';
import { reminderReducer } from './reminderReducer';

const reducers = {
  calendar: calendarReducer,
  reminder: reminderReducer
};

export default combineReducers(reducers);