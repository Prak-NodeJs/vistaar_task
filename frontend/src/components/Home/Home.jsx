import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios'
import { set } from 'mongoose';
import Header from '../Header/Header';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState()
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/customer/login/success`;
      const data = await axios.get(url, { withCredentials: true });
      const userData = data.data;
      localStorage.setItem('user', JSON.stringify(userData.data)); // Use JSON.stringify here
      setUser(userData);
    } catch (err) {
      navigate('/login')
    }
  };

  useEffect(() => {
    getUser();
  }, []);


  return (
    <>
      <div>
        Home
        </div>
    </>
  
  );
};

export default Home;
