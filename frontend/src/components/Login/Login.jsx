import React from 'react';
import './Login.css';

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.REACT_APP_BASE_URL}/customer/auth/google`;
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login with Google</h2>
        <p>Below that, login with Google to see details:</p>
        <button onClick={handleGoogleLogin} className="google-login-button">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
