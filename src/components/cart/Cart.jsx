import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import classes from './cart.module.css';



const Cart = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    setProducts(cartData);
  }, []);

  const handleRemoveProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('cartData', JSON.stringify(updatedProducts));
  };

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleCheckout = () => {
    if (products.length > 0) {
      // Show a cheering symbol (emoji)
      alert('🎉 Thank you for your order! Your order will arrive soon.');

      // Redirect to the checkout page
      navigate('/checkout');
    }
  };

  return (
    
    <div className={classes.container}>
      <div className={classes.wrapper}>
      <h2>Your Cart</h2>
        <div className={classes.left}>
          {/* {console.log(products)} */}
          {products.map((product) => (
            <div key={product.id} className={classes.product}>
              <div className={classes.productImage}>
                <img src={product.img} alt={product.title} />
              </div>
              <div className={classes.productInfo}>
                <span className={classes.productName}>{product.title}</span>
                <span className={classes.productCategory}>{product.category}</span>
                <span className={classes.productPrice}>${(product.price * product.quantity).toFixed(2)}</span>
              </div>
              <div className={classes.productActions}>
                <button
                  onClick={() => handleRemoveProduct(product.id)}
                  className={classes.removeButton}
                >
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          ))}
          {/* Button to navigate to checkout */}
          <button
            onClick={handleCheckout}
            disabled={products.length === 0}
            className={classes.checkoutButton}
          >
            Ready to Checkout
          </button>
        </div>
        <div className={classes.right}>
          <div className={classes.totalProductMsg}>Total products: {products.length}</div>
          <div className={classes.subtotalCheckoutBtns}>
            <span className={classes.subtotal}>
              Subtotal: ${calculateTotalPrice().toFixed(2)}
            </span>
            <span className={classes.checkoutStatus}>
              {products.length > 0 ? 'Ready to checkout' : 'Your cart is empty'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
