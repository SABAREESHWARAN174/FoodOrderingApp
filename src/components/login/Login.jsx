import React, { useState } from 'react';
import classes from './login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate a successful login by storing user data in local storage
    const userData = { email: email, password: password };
    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/home');
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginRightSide}>
          <h2 className={classes.title}>Login</h2>
          <form onSubmit={handleLogin} className={classes.loginForm}>
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
            <button type="submit" className={classes.submitBtn}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
