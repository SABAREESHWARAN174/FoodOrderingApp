// src/redux/store.js

import { createStore, combineReducers } from 'redux';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  product: productReducer, // You can add more reducers here if needed
});

const store = createStore(rootReducer);

export default store;
