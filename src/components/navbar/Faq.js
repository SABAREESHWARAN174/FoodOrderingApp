// FAQ.js
import React from 'react';
import classes from './faq.module.css';

const FAQ = () => {
  return (
    <div className={classes.faqContainer}>
      <h1>Frequently Asked Questions</h1>
      <br></br>
      <div className={classes.questionList}>
        <div className={classes.questionBox}>
          <h3>How can I place an order?</h3>
          <p>
            To place an order, simply open our app, browse through the available restaurants, select your desired dishes, and add them to your cart. Once you're ready, proceed to checkout and choose your preferred payment method.
          </p>
        </div>
        <div className={classes.questionBox}>
          <h3>How it took for delivery?</h3>
          <p>
            To view the delivery details , you can see a checkout menu else you will get a message shortly through whatsapp , that our dealers conatct number , place etc..
          </p>
        </div>
        <div className={classes.questionBox}>
          <h3>What payment methods are accepted?</h3>
          <p>
            We accept various payment methods, including credit/debit cards, digital wallets (e.g., PayPal, Apple Pay), and cash on delivery (where available). You can choose the one that's most convenient for you during checkout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
