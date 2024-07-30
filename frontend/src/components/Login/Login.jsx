import React from 'react';
import './Login.css';

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:4000/v1/customer/auth/google';
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <button onClick={handleGoogleLogin} className="google-login-button">
        Login with Google
      </button>
    </div>
  );
};

export default Login;
