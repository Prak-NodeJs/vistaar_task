import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import { useState, useEffect } from "react";
import axios from 'axios';
import Accounts from "./components/Accounts/Accounts";
import Customer from "./components/Customer/Customer";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/customer/login/success`;
      const data = await axios.get(url, { withCredentials: true });
      const userData = data.data;
      setUser(userData);
    } catch (err) {
      console.log(err);
      setUser(null); 
    }
  };

  useEffect(() => {
    getUser();
  }, []);

 
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Customer user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/accounts/:accountId"
          element={user ? <Accounts /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
