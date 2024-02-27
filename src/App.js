import './App.css';
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import DetailsPage  from "./components/Details/DetailsPage";
import HomePage from './components/Home/HomePage'
import CheckoutPage from './components/Checkout/CheckoutPage';
import LoginPage from './components/Login/LoginPage';
import ProductPage from './components/Items/ProductPage';
import RegistrationPage from './components/Registration/RegistrationPage';
import DashboardPage from './components/Dashboard/DashboardPage';
import OrdersPage from './components/Orders/OrdersPage';

function App() {
  return (
    <div>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/cart" element={<CheckoutPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/:category" element={<ProductPage />}/>
          <Route path="/:category/product/:product_id/" element={<DetailsPage />}/>
        </Routes>
      </Main>
    </div>
  );
}

export default App;
