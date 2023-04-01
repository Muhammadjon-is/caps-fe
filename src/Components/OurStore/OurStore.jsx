import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import LoginContainer from "../Login.jsx/LoginContainer";
import Crumb from "../Login.jsx/Crumb";
import Meta from "./Meta";
import gr2 from "../../assets/gr.svg";
import gaming2 from "../../assets/gamingPc1.png";
import "./OurStore.css";
import ProductCard from "./ProductCard";

// import axios from "axios";
const OurStore = () => {
  const [grid, setGrid] = useState(4);

  // Sort by Price

  return (
    <>
      <Meta title={"Our Store"} />
      <Crumb title="Our Store" />
      <LoginContainer class1="store-wrapper ourStore home-wrapper-2 py-5">
        <div className="row ">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Laptops</li>
                  <li>Keyboards</li>
                  <li>Earphones</li>
                  <li>Mouses</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In Stock (1)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Asus
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    HP
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Acer
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Lenovo
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img src={gaming2} className="img-fluid" alt="watch" />
                  </div>
                  <div className="w-50">
                    <h5>The Best Gaming Laptops Ever</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 3200</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img src={gaming2} className="img-fluid" alt="watch" />
                  </div>
                  <div className="w-50">
                    <h5>The Best Gaming Laptops Ever</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 3000</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
        
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                {/* <ProductCard grid={grid} /> */}
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </LoginContainer>
    </>
  );
};

export default OurStore;
