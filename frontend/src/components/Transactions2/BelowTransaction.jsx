import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BelowTransaction.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

export const BelowTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
       
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/customer/accounts/transactions/below5000`, {
          withCredentials: true,
        });
        setTransactions(response.data.data);
        console.log("transaction_response", response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    const user = JSON.parse(localStorage.getItem('user')); 
    if(!user){
      navigate('/login')
    }
    fetchTransactions();
  }, []);

  return (
    <div className="transactions-container">
      <h1>Transactions Below 5000</h1>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Account ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction._id}</td>
              <td>{transaction.account_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
