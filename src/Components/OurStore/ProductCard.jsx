import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Pagination from "./Pagination";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Rating from "./Rating";
import { listProduct } from "../Redux/Actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import "./ProductCard.css";
// import { Laptop } from "@mui/icons-material";

const ProductCard = () => {
  const { keyword, pagenumber } = useParams();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  console.log(products);
  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);


  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts("price-descending");
  }, []);

  const fetchProducts = async (sortBy) => {
    const response = await fetch(`/api/byPrice?sortBy=${sortBy}`);
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  const handleSortChange = (event) => {
    const sortBy = event.target.value;
    fetchProducts(sortBy);
  };



  return (
    <>
      <div className="container">
        <div className="section">
        <select onChange={handleSortChange} >
                    <option value="manual">Featured</option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                  </select>
                   <br /> <br /> <br /> <br /> <br />
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>

                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                            <h3>${product.price}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
