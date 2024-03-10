import { configureStore } from '@reduxjs/toolkit';
import { RegisterReducer } from '../components/Registration/RegistrationSlice';
import { CategoryReducer } from '../components/Categories/CategorySlice';
import { ProductReducer } from '../components/Items/ProductSlice';
import { CheckoutReducer } from '../components/Checkout/CheckoutSlice';
import { CustomerIdReducer } from '../components/Checkout/CustomerIdSlice';
import { LoginReducer } from '../components/Login/LoginSlice'
import { OrderReducer } from '../components/Orders/OrderSlice';

export const store = configureStore({
    reducer:{
          register:RegisterReducer,
          category:CategoryReducer,
          product:ProductReducer,
          cart:CheckoutReducer,
          customerid:CustomerIdReducer,
          auth:LoginReducer,
          order:OrderReducer,
    }
});
export default store;