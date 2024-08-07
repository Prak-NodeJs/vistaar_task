import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            navigate('/')
        }
    }, []);

    const handleGoogleLogin = () => {
        window.location.href = `${process.env.REACT_APP_BASE_URL}/customer/auth/google`;
    };

    return (
        <>
            <div className="login-container">
                <div className="login-form">
                    <h2>Login with Google</h2>
                    <p>Below that, login with Google to see details:</p>
                    <button onClick={handleGoogleLogin} className="google-login-button">
                        Sign in with Google
                    </button>
                </div>
            </div>
        </>


    );
};

export default Login;
