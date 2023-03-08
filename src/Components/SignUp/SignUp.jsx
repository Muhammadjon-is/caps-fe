import React from "react";
import Crumb from "../Login.jsx/Crumb";
import Meta from "../Login.jsx/Meta";
import LoginContainer from "../Login.jsx/LoginContainer";
import LoginInput from "../Login.jsx/LoginIput";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { register } from "../Redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import "./SignUp.css";
const SignUp = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = useParams();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
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
                className="d-flex flex-column gap-15"
                onSubmit={submitHandler}
              >
                <LoginInput
                  type="text"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <LoginInput
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <LoginInput
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign Up</button>
                    <p>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              I Have Account <strong>Login</strong>
            </Link>
          </p>
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
