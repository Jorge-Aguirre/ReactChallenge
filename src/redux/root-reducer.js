import { combineReducers } from 'redux';

import riskReducer from './risk/risk.reducer';
import rebalancedReducer from './rebalanced/rebalanced.reducer';

export default combineReducers({
  risk: riskReducer,
  rebalanced: rebalancedReducer,
});