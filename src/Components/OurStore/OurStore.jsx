import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import LoginContainer from "../Login.jsx/LoginContainer";
import Crumb from "../Login.jsx/Crumb";
import Meta from "./Meta";
import gr2 from "../../assets/gr.svg";
import gaming2 from "../../assets/gamingPc1.png";
import "./OurStore.css";
import ProductCard from "./ProductCard";
import axios from "axios";
const OurStore = () => {
  const [grid, setGrid] = useState(4);

 
  // // ! Sort data by Price
  // const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // const [minPrice, setMinPrice] = useState("");
  // const [maxPrice, setMaxPrice] = useState("");

  // useEffect(() => {
  //   // Fetch products from API or database and set the products state
  //   // ...
  //   setProducts(productsData);
  //   setFilteredProducts(productsData);
  // }, []);

  // const handleMinPriceChange = (event) => {
  //   setMinPrice(event.target.value);
  //   filterProductsByPrice(event.target.value, maxPrice);
  // };

  // const handleMaxPriceChange = (event) => {
  //   setMaxPrice(event.target.value);
  //   filterProductsByPrice(minPrice, event.target.value);
  // };

  // const filterProductsByPrice = (min, max) => {
  //   const filtered = products.filter((product) => {
  //     return product.price >= min && product.price <= max;
  //   });
  //   setFilteredProducts(filtered);
  // };

// !Sort data min max price
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(9999);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`products?min=${minValue}&max=${maxValue}`);
      setProducts(response.data);
    };
    fetchProducts();
  }, [minValue, maxValue]);

  const handleMinChange = (event) => {
    setMinValue(Number(event.target.value));
  };

  const handleMaxChange = (event) => {
    setMaxValue(Number(event.target.value));
  };



  // !Sort products from low to high prices in React

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
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of Stock(0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
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
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>

                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src={gr2}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src={gr2}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src={gr2}
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src={gr2}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
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
