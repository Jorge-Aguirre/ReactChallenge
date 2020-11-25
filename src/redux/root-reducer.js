import { combineReducers } from 'redux';

import riskReducer from './risk/risk.reducer';
import rebalanceReducer from './rebalance/rebalance.reducer';

export default combineReducers({
  risk: riskReducer,
  rebalance: rebalanceReducer,
});