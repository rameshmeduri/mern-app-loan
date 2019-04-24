import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import settingReducer from './settingReducer';
import authReducer from './authReducer';
import notifyReducer from './notifyReducer';
import loanReducer from './loanReducer';

const reducers = combineReducers({
  routing: routerReducer,
  settings: settingReducer,
  auth: authReducer,
  notification: notifyReducer,
  loan: loanReducer
});

export default reducers;
