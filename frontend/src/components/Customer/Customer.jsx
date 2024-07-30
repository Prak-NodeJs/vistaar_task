import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Customer.css';

const Customer = ({ user }) => {
  const [customerData, setCustomerData] = useState([]);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const accessToken = user.data.access_token;
      const url = `${process.env.REACT_APP_BASE_URL}/customer`;
      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      setCustomerData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleAccountClick = (accountId) => {
    navigate(`/accounts/${accountId}`);
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
