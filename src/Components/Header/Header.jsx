import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { BsSearch } from "react-icons/bs"
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { logout } from "../Redux/Actions/userAction";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutUser = () => {
    dispatch(logout());
  };

  const searchProducts = (keyword) => {
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      setErrorMessage("Keyword not found");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    searchProducts(keyword);
  };

  // const userInfo =

  return (
    <>
      <header className="header-upper py-3 headerClass forfixed ">
        <div className="container-xxl  forBorder">
          <div className="row align-items-center ">
            <div className="col-2">
              <h2>
                <Link className="main-logo navbar-brand" to="/">
                  {" "}
                  <img alt="logo" src="/images/logo.png" />
                </Link>
              </h2>
            </div>
            <div className="col-5 ">
              <div className="col-12 d-flex align-items-center changeSearchbar ">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="rounded search search-button"
                  >
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-12">
                    <div className="menu-bottom d-flex align-items-center gap-30">
                      <div className="menu-links">
                        <div className="d-flex align-items-center gap-15 ">
                          <Link to="/">Home</Link>
                          <Link to="/OurStore">Store</Link>

                          <Link to="/contact">Contact</Link>

                          <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                            {userInfo ? (
                              <div className="dropdown  colorLogin">
                                <button
                                  className="btn colorLogin menu-links dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Hi, {userInfo.name}
                                </button>
                                <ul
                                 class="dropdown-menu dropbg"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="/profile"
                                    >
                                      Profile
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="/"
                                      onClick={logoutUser}
                                    >
                                      Logout
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            ) : (
                              <>
                                <Link className="me-3" to="/register">
                                  Register
                                </Link>
                                <Link className="" to="/login">
                                  Login
                                </Link>
                              </>
                            )}
                          </div>
                          <Link to="cart">
                            <i className="fas fa-shopping-bag"></i>
                            <span className="badge">{cartItems.length}</span>
                          </Link>
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
