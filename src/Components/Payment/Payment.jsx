import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../Redux/Actions/cartAction";
import "./Payment.css"
const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const navigate = useNavigate();

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <div className="container forPayment d-flex justify-content-center align-items-center login-center">
      <form
        className="Login2 col-md-8 col-lg-4 col-11"
        onSubmit={submitHandler}
      >
        <h6>SELECT PAYMENT METHOD</h6>
        <div className="payment-container">
          <div className="radio-container">
            <input
              className="form-check-input"
              type="radio"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label">PayPal or Credit Card</label>
          </div>
        </div>

        <button className="button" type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Payment;
