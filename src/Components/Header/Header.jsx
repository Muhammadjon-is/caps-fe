import React, { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { logout } from "../Redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css"
const Header = () => {
  const [keyword, setKeyword] = useState()
   const dispatch = useDispatch
 const navigate = useNavigate()


 const cart = useSelector((state) => state.cart)
 const {cartItems} = cart;
 const userLogin = useSelector((state) => state.userLogin);
 const { userInfo } = userLogin;

 const logoutHandler = () => {
  dispatch(logout());
 };

 const submitHandler = (e) => {
  e.preventDefault();
  if(keyword.trim()) {
    navigate(`/search/${keyword}`)
  } else {
    navigate("/")
  }
 }

  return (
    <>
    
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="main-logo navbar-brand" to="/">   <img alt="logo" src="/images/logo.png" /></Link>
              </h2>
            </div>
            <div className="col-5">
              {/* <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" onSubmit={submitHandler}  />
                </span>
              </div> */}
                  <div className="col-12 d-flex align-items-center">
                  <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
            </div>
            <div className="col-5">
          
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
               
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <Link to="/">Home</Link>
                    <Link to="/OurStore">Our Store</Link>
                    
                    <Link to="/contact">Contact</Link>
                   <Link  to="/login" >    
                    <p className="mb-0">
                      Log in <br /> My Account
                    </p>
                    </Link>
                    <Link to='cart'> 
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                   </Link>
                   
                  </div>
                  {userInfo ? (

                 
                  <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="#"
                          
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                     ) : (
                      <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          Register
                        </Link>
                      </div>
                    </div>
                     )}
                </div>
{/*   
                <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link> */}

              </div>
            </div>
          </div>
        </div>
     
            </div>
          </div>
        </div>
      </header>
    
    </>
  );
};

export default Header;
