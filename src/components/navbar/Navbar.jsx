import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import logo from './swiggy.jpg';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  // Simulate fetching cart data from local storage
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cartData.length);
  }, []);

  const handleLogout = () => {
    // Simulate logout by clearing user data from local storage
    localStorage.removeItem('user');
    // Redirect to the login page
    window.location.href = '/login'; // You can use a react-router navigation method here if you prefer
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/home" className={classes.title}> {/* Updated Link */}
            <img
              src={logo}
              alt="Swiggy Logo"
              className={classes.logo}
              style={{ width: '160px' }}
            />
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <Link to="/home" className={`${classes.navLink} ${classes.buttonLink}`}>
                Home
              </Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/contacts" className={`${classes.navLink} ${classes.buttonLink}`}>
                Contacts
              </Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/foods" className={`${classes.navLink} ${classes.buttonLink}`}>
                Hotel
              </Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/faq" className={`${classes.navLink} ${classes.buttonLink}`}>
                FAQ
              </Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/create" className={`${classes.navLink} ${classes.buttonLink}`}>
                Create
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon} />

          {/* Cart button with special styling */}
          <Link to="/cart" className={`${classes.cartContainer} ${classes.cartButton}`}> {/* Updated Link */}
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>{cartCount}</div>
          </Link>

          {/* Logout button with special styling */}
          <button onClick={handleLogout} className={`${classes.logout} ${classes.logoutButton}`}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
