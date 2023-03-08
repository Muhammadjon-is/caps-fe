import React from "react";
import { Link } from "react-router-dom";
import Crumb from "./Crumb";
import Meta from "./Meta";
import LoginContainer from "./LoginContainer";
import LoginInput from "./LoginIput";
import './Login.css'
const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <Crumb title="Login" />

      <LoginContainer class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <LoginInput type="email" name="email" placeholder="Email" />
                <LoginInput
                  type="password"
                  name="password"
                  placeholder="Password"
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
