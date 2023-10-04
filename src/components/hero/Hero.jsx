// Hero.js
import React from 'react';
import classes from './hero.module.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import manEating from '../../assets/bg.jpg';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Hero = () => {
  return (
    <section style={{ height: '100vh' }} id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Welcome to neo foods</h2>
          <br></br>
          <p className={classes.zeroMsg}>
            Have a better meal, <span>Care for your health</span>
          </p>
          <br />
          <p className={classes.firstMsg}>
            But going out to get <span>food takes time...</span>
          </p>
          <br />
          <p className={classes.secondMsg}>
            Why not order <span>pizza</span> or something <br />{' '}
            <span>delicious</span> from our restaurant
          </p>
          <p className={classes.desc}>
            Our restaurant always puts the client first.
            They are our single most important asset.
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>
              <Link
                to="foods" // Specify the target section's id
                spy={true}
                smooth={true}
                duration={500}
              >
                Order now!
              </Link>
            </button>
            <button className={classes.buttonSee}>
              <a href="#foods">
                See what's available <AiOutlineArrowDown />
              </a>
            </button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={manEating} alt="" className={classes.manEatingImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
