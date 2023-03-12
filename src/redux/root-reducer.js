import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth/auth-slice';
import contactReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;
