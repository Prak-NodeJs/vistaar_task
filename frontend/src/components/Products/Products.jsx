import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css'; // Import the CSS file for styling

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/customer/accounts/products`, {
          headers: {
            'Authorization': `Bearer ${user.access_token}`,
          },
          withCredentials: true,
        });
        setProducts(response.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

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
