import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { removeFromCart, storeinvoice } from './CheckoutSlice'
import { fetchUserId } from "./CustomerIdSlice";
import CartNavigationBar from "../Navigationbars/CartNavigationBar";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.auth.user);
  const customerdata = useSelector((state) => state.customerid.items);

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  useEffect(() => {
    if (user) {
      dispatch(fetchUserId(user.username));
    }
  }, [user, dispatch]);
  const checkouthandler = () => {
    let name = customerdata.id;
    let amount = cartItems.reduce((total, item) => total + item.amount, 0);
    let status = "ORDERED";
    let products = cartItems.map((item) => item.id);
    let tenure = cartItems.map((item)=>item.tenure);
    tenure=tenure[0]
    const invoicedata = {
      name: name,
      amount: amount,
      status: status,
      products: products,
      tenure: tenure,
    };
    dispatch(storeinvoice(invoicedata));
    console.log(invoicedata);
    window.alert("ordered successfully");
    navigate("/orders");
  };

  const cartItemStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
  };

  return (
    <div className="cart-container">
      <CartNavigationBar/>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <center>
          <h1>Your cart is empty</h1>
        </center>
      ) : (
        <div>
          <div style={{ marginBottom: "20px" }}>
          </div>
          <button onClick={checkouthandler}>Checkout</button>
          <hr />
          {cartItems.map((item) => (
            <div key={item.id} style={cartItemStyle} className="cart-item">
              <p>{item.id}</p>
              <p>Name: {item.name}</p>
              <p>Tenure: {item.tenure} months</p>
              <p>Quantity: {item.quantity}</p>
              <p>Amount: ₹{item.amount}</p>
              <button onClick={() => removeHandler(parseInt(item.id))}>
                Remove from cart
              </button>
              <hr />
            </div>
          ))}
          <p>Total Amount: ₹{cartItems.reduce((total, item) => total + item.amount, 0)}</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
