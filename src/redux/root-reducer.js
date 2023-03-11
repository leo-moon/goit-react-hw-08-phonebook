import { combineReducers } from '@reduxjs/toolkit';

import contactReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import authReducer from '../redux/auth/auth-slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactReducer,
  filter: filterReducer,
});
