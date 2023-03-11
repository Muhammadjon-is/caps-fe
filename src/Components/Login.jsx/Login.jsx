import React from "react";
import { useEffect, useState  } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Crumb from "./Crumb";
import Meta from "./Meta";
import LoginContainer from "./LoginContainer";
import LoginInput from "./LoginIput";
import Loading from "../LoadingError/Loading";
import { login } from "../Redux/Actions/userAction";
import Message from "../LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
const Login = ({history}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = useParams()
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, history, redirect]);

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
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signUp" className="button signup">
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
