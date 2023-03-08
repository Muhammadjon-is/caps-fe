import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import gamingLaptop from "../../assets/gamingLaptop1.png";
import prodcompare from "../../assets/prodcompare.svg";
import addcart from "../../assets/add-cart.svg";
import view from "../../assets/view.svg";
import wish from "../../assets/wish.svg";
import { useLocation } from "react-router-dom";

import "./ProductCard.css";
import { Laptop } from "@mui/icons-material";

const ProductCard = (props) => {
  const [products, setProducts] = useState([]);
  const { grid } = props;

  console.log(grid);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./Products.json");
      const data = await response.json();
      setProducts(data.products);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>

          <div className="product-image">
            <img src={gamingLaptop} className="img-fluid" alt="product image" />
            <img src={gamingLaptop} className="img-fluid" alt="product image" />
          </div>

          <div className="product-details">
            <h6 className="brand">Asus</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={gamingLaptop} className="img-fluid" alt="product image" />
            <img src={gamingLaptop} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
