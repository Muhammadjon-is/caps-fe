import React from 'react'
import ReactStars from 'react-rating-stars-component'
import gamingLaptop from "../../assets/gamingLaptop1.png"
import prodcompare from "../../assets/prodcompare.svg"
import addcart from "../../assets/add-cart.svg"
import view from "../../assets/view.svg"
import wish from "../../assets/wish.svg"
import "./ProductCard.css"
const ProductCard = (props) => {
 
    const {grid} = props;
    console.log(grid);

    return (
    <div>
        
      <div className="product-card position-relative" >
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
             Asus Best Gaming Laptop Ever
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat nam a fuga rem molestiae non dolor. Incidunt nostrum similique eaque, corporis dignissimos sequi delectus laudantium totam placeat quos eos at.
            </p>
            <p className="price">$1200.00</p>
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
      <div className="product-card position-relative" >
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
            Asus Best Gaming Laptop Ever
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis assumenda saepe omnis, soluta vel ullam qui. Soluta numquam quisquam perferendis debitis eius asperiores, ipsum voluptatem sed, tenetur, animi suscipit vero?
            </p>
            <p className="price">$1200.00</p>
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
  )
}

export default ProductCard