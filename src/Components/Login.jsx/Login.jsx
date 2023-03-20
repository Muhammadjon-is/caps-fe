import React from "react";
import {  useState, useEffect  } from "react";
import { Link, useLocation, useNavigate,  } from "react-router-dom";
import Crumb from "./Crumb";
import Meta from "./Meta";
import LoginContainer from "./LoginContainer";
import Loading from "../LoadingError/Loading";
import { login } from "../Redux/Actions/userAction";
import Message from "../LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";


const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);
 console.log(userInfo);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <Meta title={"Login"} />
      <Crumb title="Login" />

      <LoginContainer class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
              <form action="" className="d-flex flex-column gap-15" onSubmit={submitHandler}>

              <input
              className="RegInput"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
          className="RegInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/register" className="button signup">
                      SignUp
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

export default Login;
