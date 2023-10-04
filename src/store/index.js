// Create the Redux store
import { createStore } from 'redux';
import rootReducer from './admin';

const store = createStore(rootReducer);

export default store;
