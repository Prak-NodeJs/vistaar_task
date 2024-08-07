import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Customer.css';

const Customer = () => {
  const [customerData, setCustomerData] = useState([]);
  const navigate = useNavigate();

  const getUser = async () => {
    try {     
      const url = `${process.env.REACT_APP_BASE_URL}/customer`;
      const response = await axios.get(url, {
        withCredentials: true,
      });
      setCustomerData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
  if(!user){
    navigate('/login')
  }
    getUser();
  }, []);

  const handleAccountClick = (accountId) => {
    navigate(`/transactions/${accountId}`);
  };

  return (
    <div className="customer-container">
      <h1>Customer Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Accounts</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customer) => (
            <tr key={customer._id}>
              <td>{customer.name}</td>
              <td>{customer.address}</td>
              <td>
                {customer.accounts.map((accountId) => (
                  <button key={accountId} onClick={() => handleAccountClick(accountId)}>
                    {accountId}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
