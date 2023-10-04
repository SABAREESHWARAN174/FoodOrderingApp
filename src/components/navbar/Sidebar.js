import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineContacts, AiOutlineShoppingCart, AiOutlineQuestionCircle, AiOutlineUser, AiOutlineArrowLeft } from 'react-icons/ai';
import classes from './sidebar.module.css'; // Add CSS module for styling

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={showSidebar ? classes.sidebar : `${classes.sidebar} ${classes.hidden}`}>
      <div className={classes.backButton} onClick={toggleSidebar}>
        <AiOutlineArrowLeft className={classes.sidebarIcon} />
      </div>
      {showSidebar && (
        <ul className={classes.sidebarList}>
          <li className={classes.sidebarItem}>
            <Link to="/home" className={classes.sidebarLink}>
              <AiOutlineHome className={classes.sidebarIcon} />
              Home
            </Link>
          </li>
          <li className={classes.sidebarItem}>
            <Link to="/contacts" className={classes.sidebarLink}>
              <AiOutlineContacts className={classes.sidebarIcon} />
              Contacts
            </Link>
          </li>
          <li className={classes.sidebarItem}>
            <Link to="/cart" className={classes.sidebarLink}>
              <AiOutlineShoppingCart className={classes.sidebarIcon} />
              Cart
            </Link>
          </li>
          <li className={classes.sidebarItem}>
            <Link to="/foodmenu" className={classes.sidebarLink}>
              <AiOutlineQuestionCircle className={classes.sidebarIcon} />
              FoodMenu
            </Link>
          </li>
          <li className={classes.sidebarItem}>
            <Link to="/profile" className={classes.sidebarLink}>
              <AiOutlineUser className={classes.sidebarIcon} />
              Profile
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
