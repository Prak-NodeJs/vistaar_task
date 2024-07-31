import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Home = () => {
  const navigate = useNavigate();
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/customer/login/success`;
      const data = await axios.get(url, { withCredentials: true });
      const userData = data.data;
      localStorage.setItem('user', JSON.stringify(userData.data));
      navigate('/customer')
      window.location.reload();
    } catch (err) {
      localStorage.removeItem('user')
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
