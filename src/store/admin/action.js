// admin actions
export const SET_ORDERS = 'SET_ORDERS';

export const setOrders = (orders) => ({
  type: SET_ORDERS,
  payload: orders,
});
