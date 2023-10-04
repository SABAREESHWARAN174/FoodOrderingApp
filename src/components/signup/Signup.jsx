import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './signup.module.css';
import logo from '../../components/signup/neo-foods.jpg';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true); // Start loading

      // Simulate an API call (e.g., registration) with a delay
      // In a real application, replace this with your actual registration logic
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Create a user object with the entered data
      const userData = {
        username,
        email,
        password,
      };

      // Store user data in local storage
      localStorage.setItem('userData', JSON.stringify(userData));

      // Redirect to the desired page (e.g., login) after a delay
      setTimeout(() => {
        setIsLoading(false); // Stop loading
        navigate('/login');
      }, 1000);
    } catch (error) {
      setIsLoading(false); // Stop loading on error
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className={classes.signUpContainer}>
      <img src={logo} alt="Neo Foods Logo" className={classes.logo} />
      <div className={classes.centered}>
        <div className={classes.signUpRightSide}>
          <h2 className={classes.title}>Sign Up</h2>
          <form onSubmit={handleSignup} className={classes.signUpForm}>
            <input
              type="text"
              placeholder="Type username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Type email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Type password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={classes.submitBtn} disabled={isLoading}>
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
            <p>
              Already have an account? <Link to="/login" className={classes.loginLink}>Login</Link>
            </p>
          </form>
          {error && (
            <div className={classes.errorMessage}>
              Wrong credentials! Try different ones.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
