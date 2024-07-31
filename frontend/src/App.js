import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Customer from "./Components/Customer/Customer";
import Transactions from "./Components/Transaction/Transaction";
import Products from "./Components/Products/Products";
import { BelowTransaction } from "./Components/Transactions2/BelowTransaction";

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
       
        <Route
          path="/login"
          element={ <Login/>}
        />
        <Route
          path="/"
          element={ <Home/>}
        />
        <Route
          path="/customer"
          element={ <Customer/>}
        />
         <Route
          path="/transactions/:accountId"
          element={ <Transactions/>}
        />
        <Route
          path="/products"
          element={ <Products/>}
        />
        <Route
          path="/transactionbelow"
          element={ <BelowTransaction/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
