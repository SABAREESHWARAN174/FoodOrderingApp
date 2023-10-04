import React, { useState, useEffect } from 'react';
import classes from './foodCatalog.module.css'; // Make sure to adjust the import path
import { Link } from 'react-router-dom';

import burger1 from '../../assets/burger1.jpg';
import burger2 from '../../assets/burger2.jpg';
import burger3 from '../../assets/burger3.jpg';
import burger4 from '../../assets/burger4.jpg';
import burger5 from '../../assets/burger5.jpg';

import pizza1 from '../../assets/pizza1.jpg';
import pizza2 from '../../assets/pizza2.jpg';
import pizza3 from '../../assets/pizza3.jpg';
import pizza4 from '../../assets/pizza4.jpg';
import pizza5 from '../../assets/pizza5.jpg';

import pasta1 from '../../assets/pasta1.jpg';
import pasta2 from '../../assets/pasta2.jpg';
import pasta3 from '../../assets/pasta3.jpg';
import pasta4 from '../../assets/pasta4.jpg';
import pasta5 from '../../assets/pasta5.jpg';

import gyros1 from '../../assets/gyros1.jpg';
import gyros2 from '../../assets/gyros2.jpg';
import gyros3 from '../../assets/gyros3.jpg';
import gyros4 from '../../assets/gyros4.jpg';
import gyros5 from '../../assets/gyros5.jpg';




const FoodCatalog = () => {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Burger'); // Initialize activeCategory

  useEffect(() => {
    // Calculate the total amount based on the items in the cart
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // You can use 'total' here or anywhere else in your component.
    // For example, you can display it in your component if needed.
    console.log('Total Amount:', total);
  }, [cart]);

  const addToCart = (foodItem) => {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex((item) => item.id === foodItem.id);

    if (existingItemIndex !== -1) {
      // Item is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      localStorage.setItem('cartData', JSON.stringify(updatedCart));
    } else {
      // Item is not in the cart, add it with quantity 1
      const updatedCart = [...cart, { ...foodItem, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem('cartData', JSON.stringify(updatedCart));
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

const burgerImages = [
    { id: 1, img: burger1, title: 'Indian Burger', price: 8.99, rating: 4.5 },
    { id: 2, img: burger2, title: 'Fried Burger', price: 5.99, rating: 4.5 },
    { id: 3, img: burger3, title: 'Indian Burger', price: 6.99, rating: 4.2 },
    { id: 4, img: burger4, title: 'Chinese Burger', price: 7.99, rating: 4.8 },
    { id: 5, img: burger5, title: 'Stuffed Burger', price: 8.99, rating: 4.7 },
  ];

  const pizzaImages = [
    { id: 6, img: pizza1, title: 'Margherita Pizza', price: 10.99, rating: 4.3 },
    { id: 7, img: pizza2, title: 'Pepperoni Pizza', price: 12.99, rating: 4.5 },
    { id: 8, img: pizza3, title: 'Vegetarian Pizza', price: 11.99, rating: 4.2 },
    { id: 9, img: pizza4, title: 'Hawaiian Pizza', price: 13.99, rating: 4.4 },
    { id: 10, img: pizza5, title: 'Supreme Pizza', price: 14.99, rating: 4.6 },
  ];

  const pastaImages = [
    { id: 11, img: pasta1, title: 'Spaghetti Carbonara', price: 9.99, rating: 4.2 },
    { id: 12, img: pasta2, title: 'Penne alla Vodka', price: 10.99, rating: 4.3 },
    { id: 13, img: pasta3, title: 'Fettuccine Alfredo', price: 11.99, rating: 4.4 },
    { id: 14, img: pasta4, title: 'Lasagna', price: 12.99, rating: 4.5 },
    { id: 15, img: pasta5, title: 'Ravioli', price: 13.99, rating: 4.6 },
  ];

  const gyrosImages = [
    { id: 16, img: gyros1, title: 'Classic Gyros', price: 9.99, rating: 4.3 },
    { id: 17, img: gyros2, title: 'Chicken Gyros', price: 10.99, rating: 4.2 },
    { id: 18, img: gyros3, title: 'Beef Gyros', price: 11.99, rating: 4.4 },
    { id: 19, img: gyros4, title: 'Vegetarian Gyros', price: 12.99, rating: 4.5 },
    { id: 20, img: gyros5, title: 'Seafood Gyros', price: 13.99, rating: 4.6 },
  ];
  const getImagesForCategory = () => {
    switch (activeCategory) {
      case 'Burger':
        return burgerImages;
      case 'Pizza':
        return pizzaImages;
      case 'Pasta':
        return pastaImages;
      case 'Gyros':
        return gyrosImages;
      default:
        return [];
    }
  };

  const foodImages = getImagesForCategory();

  return (
    <div className={classes.container}>
      <div className={classes.categoryButtons}>
        <button
          onClick={() => handleCategoryChange('Burger')}
          className={activeCategory === 'Burger' ? classes.activeCategory : ''}
        >
          Burger
        </button>
        <button
          onClick={() => handleCategoryChange('Pizza')}
          className={activeCategory === 'Pizza' ? classes.activeCategory : ''}
        >
          Pizza
        </button>
        <button
          onClick={() => handleCategoryChange('Pasta')}
          className={activeCategory === 'Pasta' ? classes.activeCategory : ''}
        >
          Pasta
        </button>
        <button
          onClick={() => handleCategoryChange('Gyros')}
          className={activeCategory === 'Gyros' ? classes.activeCategory : ''}
        >
          Gyros
        </button>
        <br></br>
      </div>
      <div className={classes.wrapper}>
        <br></br>
        <br></br>
        <h2 className={classes.title}>{activeCategory} Menu</h2>
        <div className={classes.foods}>
          {foodImages.map((foodItem) => (
            <div key={foodItem.id} className={classes.food}>
              <div className={classes.imgContainer}>
                <img src={foodItem.img} alt={foodItem.title} />
              </div>
              <h3 className={classes.foodTitle}>{foodItem.title}</h3>
              <div className={classes.foodDetails}>
                <div>
                  <div className={classes.rating}>Rating: {foodItem.rating}</div>
                  <div className={classes.price}>
                    Price: <span>${foodItem.price}</span>
                  </div>
                </div>
                <button
                  className={classes.addToCartBtn}
                  onClick={() => addToCart(foodItem)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.cartButtonContainer}>
  <button className={classes.cartButton}>
    <Link to="/cart" className={classes.cartLink}>
      View Cart
    </Link>
  </button>
</div>

      </div>
    </div>
  );
};

export default FoodCatalog;
