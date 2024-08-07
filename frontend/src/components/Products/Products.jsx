import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchProducts = async () => {
      try {
     
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/customer/accounts/products`, {
          withCredentials: true,
        });
        setProducts(response.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user){
     navigate('/login')
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="products-container">
      <h1>Products</h1>
      <ul className="products-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            {index + 1}. {product}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
