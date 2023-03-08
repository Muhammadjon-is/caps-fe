import React from "react";
import {  Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import "./Header.css"
const Header = () => {
  return (
    <>
    
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="main-logo" to="/">Electronic Products</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
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
                    <Link to='cart'> MyCart</Link>
                   
                  </div>
                </div>
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
