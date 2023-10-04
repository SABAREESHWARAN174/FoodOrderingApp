import React from 'react';
import classes from './contact.module.css'; // Import your CSS module

const Contact = () => {
  return (
    <div className={classes.contactContainer}> {/* Apply a class to the parent div */}
      <div className={classes.contactContent}> {/* Center the content */}
        <h1 className={classes.contactHeader}>Contact Us</h1> {/* Apply a class to the heading */}
        <ul>
          <li className={classes.contactItem}>
            <h3 className={classes.contactSubheader}>Customer Support</h3> {/* Apply a class to subheadings */}
            <p>
              Phone: +91 9843116433 <br />
              Email: <a href="mailto:support@example.com" className={classes.contactLink}>support@example.com</a> {/* Apply a class to links */}
            </p>
          </li>
          <li className={classes.contactItem}>
            <h3 className={classes.contactSubheader}>Business Inquiries</h3>
            <p>
              Phone: +91 7339365460 <br />
              Email: <a href="mailto:business@example.com" className={classes.contactLink}>business@example.com</a>
            </p>
          </li>
          <li className={classes.contactItem}>
            <h3 className={classes.contactSubheader}>Head Office Address</h3>
            <p>
              123 Main Street<br />
              papanaikenpalayam, Tamilnadu - 12345<br />
              India
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
