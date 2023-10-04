// src/redux/actions/productActions.js

export const createProduct = (productData) => {
    return {
      type: 'CREATE_PRODUCT',
      payload: productData,
    };
  };
  