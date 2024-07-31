import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Header.css';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/customer/logout`, {}, {
        headers: {
          'Authorization': `Bearer ${user.access_token}`,
        },
        withCredentials: true,
      });
      localStorage.removeItem('user');
      navigate('/login');
      window.location.reload();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="header">
      <div className="logo">MyApp</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          {user ? (
            <>
              <li className="nav-item">
                <Link to="/customer" className="nav-link">Customer</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Transactions</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/transactionbelow" className="nav-link">Low Transactions</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" onClick={handleLogout}>Logout</Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
