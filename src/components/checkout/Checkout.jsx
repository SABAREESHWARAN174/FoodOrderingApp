import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import classes from './checkout.module.css';

const Checkout = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  // Define a React Spring animation for the heart
  const heartAnimation = useSpring({
    from: { scale: 0, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    config: { duration: 800 }, // Adjust animation duration
  });

  useEffect(() => {
    // Load cart data from local storage when the component mounts
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];

    let calculatedTotalPrice = 0;

    // Calculate the total price based on the cart data
    cartData.forEach((product) => {
      calculatedTotalPrice += product.quantity * product.price;
    });

    // Update the state with the calculated total price
    setTotalPrice(calculatedTotalPrice);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <animated.h2 style={heartAnimation}>Your order is successful ❤️</animated.h2>
        <p>Expect it in 1 hour</p>
        <span>Total Price: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default Checkout;
