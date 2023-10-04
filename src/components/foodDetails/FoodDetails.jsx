import React, { useState, useEffect } from 'react';
import classes from './foodDetails.module.css';
import { useParams } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const FoodDetails = () => {
  const [foodDetails, setFoodDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    // Simulate fetching food details from local storage based on the food ID
    const localStorageFoodDetails = JSON.parse(localStorage.getItem(`food_${id}`)) || null;
    setFoodDetails(localStorageFoodDetails);
  }, [id]);

  const changeQuantity = (command) => {
    if (command === 'dec') {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    } else if (command === 'inc') {
      setQuantity((prev) => prev + 1);
    }
  };

  const addToCart = () => {
    // Simulate adding the food item to the cart (local storage)
    const cartItem = {
      ...foodDetails,
      quantity,
    };

    // Get the current cart items from local storage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    currentCart.push(cartItem);

    // Store the updated cart in local storage
    localStorage.setItem('cart', JSON.stringify(currentCart));
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {foodDetails ? (
          <>
            <div className={classes.left}>
              <img
                src={`https://foodordering-backend6.onrender.com/images/${foodDetails?.img}`}
                alt="fooddetails"
              />
            </div>
            <div className={classes.right}>
              <h2 className={classes.title}>{foodDetails?.title}</h2>
              <div className={classes.price}>
                Price: <span>$</span> {foodDetails?.price}
              </div>
              <div className={classes.quantity}>
                <button disabled={quantity === 1} onClick={() => changeQuantity('dec')}>
                  -
                </button>
                <span className={classes.quantityNumber}>{quantity}</span>
                <button onClick={() => changeQuantity('inc')}>+</button>
              </div>
              <div className={classes.category}>
                <h3>Category: </h3>
                <span className={classes.categoryName}>{foodDetails?.category}</span>
              </div>
              <div className={classes.productDesc}>
                <div>Description: </div>
                <p>
                  {foodDetails?.desc?.length > 50
                    ? `${foodDetails?.desc}`.slice(0, 50)
                    : foodDetails?.desc}
                </p>
              </div>
              <button onClick={addToCart} className={classes.addToCart}>
                Add To Cart <AiOutlineShoppingCart />
              </button>
            </div>
          </>
        ) : (
          <p>Loading food details...</p>
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
