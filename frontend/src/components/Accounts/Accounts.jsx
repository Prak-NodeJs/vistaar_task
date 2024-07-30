import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Accunts.css';

const Accounts = ({user}) => {
  const { accountId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/customer/accounts/${accountId}`, {headers: {
          'Authorization': `Bearer ${user.data.access_token}`,
        },
        withCredentials: true,
      })
        setTransactions(response.data.data.transactions);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [accountId, user.data.access_token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div >
      <h1>Account Transactions</h1>
      <p>Account ID: {accountId}</p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Transaction Code</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.transaction_code}</td>
              <td>{transaction.symbol}</td>
              <td>{parseFloat(transaction.price).toFixed(2)}</td>
              <td>{parseFloat(transaction.total).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Accounts;
