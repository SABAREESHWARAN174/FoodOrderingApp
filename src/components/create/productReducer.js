// src/redux/reducers/productReducer.js

const initialState = {
    products: [], // You can maintain an array of products here
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_PRODUCT':
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      // Add other cases for different actions if needed
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  