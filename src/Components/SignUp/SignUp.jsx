import React from "react";
import Crumb from "../Login.jsx/Crumb";
import Meta from "../Login.jsx/Meta";
import LoginContainer from "../Login.jsx/LoginContainer";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../Redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import "./SignUp.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const redirect =
    new URLSearchParams(window.location.search).get("redirect") || "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (userInfo) {
    navigate(redirect, { replace: true });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(formData.name, formData.email, formData.password));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <Meta title={"Sign Up"} />
      <Crumb title="Sign Up" />
      <LoginContainer class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              {error && <Message variant="alert-danger">{error}</Message>}
              {loading && <Loading />}

              <form
                action=""
                className="d-flex flex-column gap-15 "
                onSubmit={submitHandler}
              >
                <input
                  className="RegInput"
                  type="text"
                  placeholder="Username"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  className="RegInput"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="RegInput"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Sign up
                    </button>
                    <Link to="/login" className="button signup">
                      I Have Account <strong>Login</strong>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </LoginContainer>
    </>
  );
};

export default SignUp;
