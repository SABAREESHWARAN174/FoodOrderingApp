// admin reducer
import { SET_ORDERS } from './actions';

const initialState = {
  orders: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
