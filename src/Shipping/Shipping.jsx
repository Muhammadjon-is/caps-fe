import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,} from "react-router-dom/dist";
import { Link } from "react-router-dom/dist";
import { BiArrowBack } from "react-icons/bi";

import { saveShippingAddress } from "../Components/Redux/Actions/cartAction";
import "./Shipping.css";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const navigate = useNavigate()

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };
  
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center login-center">
        <div className="col-7">
          <div className="checkout-left-data">
            <h3 className="website-name">Dev:Isakov</h3>
            <nav
              style={{ "--bs-breadcrumb-divider": ">" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link className=" total-price" to="/cart">
                    Cart
                  </Link>
                </li>
                &nbsp; /&nbsp;
                <li
                  className="breadcrumb-ite total-price active"
                  aria-current="page"
                >
                  Information
                </li>
                &nbsp; /
                <li className="breadcrumb-item total-price active">Shipping</li>
                &nbsp; /
                <li
                  className="breadcrumb-item total-price active"
                  aria-current="page"
                >
                  Payment
                </li>
              </ol>
            </nav>
            <h4 className="title total">Contact Information</h4>
            <p className="user-details total">Muhammadjon (isakov@gmail.com)</p>
            <h4 className="mb-3">Shipping Address</h4>
            <form
              action=""
              className="d-flex gap-15 flex-wrap justify-content-between"
              onSubmit={submitHandler}
            >
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="form-control"
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  className="form-control"
                />
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  requiredq
                  className="form-control"
                />
              </div>

              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Zipcode"
                  value={postalCode}
                  onChange={ (e) => setPostalCode(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="w-100">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/cart" className="button">
                    <BiArrowBack className="me-2" />
                    Return to Cart
                  </Link>
                  <button type="submit" className="button">
                    Continue to Payment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingScreen;
