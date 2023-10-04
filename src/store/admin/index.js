// Combine reducers if you have more than one reducer
import { combineReducers } from 'redux';
import { adminReducer } from './reducers';

const rootReducer = combineReducers({
  admin: adminReducer,
});

export default rootReducer;
