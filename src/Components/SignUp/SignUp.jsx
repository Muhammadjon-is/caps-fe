import React from "react";
import Crumb from "../Login.jsx/Crumb";
import Meta from "../Login.jsx/Meta";
import LoginContainer from "../Login.jsx/LoginContainer";
import LoginInput from "../Login.jsx/LoginIput";
import "./SignUp.css"
const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <Crumb title="Sign Up" />
      <LoginContainer class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <LoginInput type="text" name="name" placeholder="Name" />
                <LoginInput type="email" name="email" placeholder="Email" />
               
                <LoginInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign Up</button>
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
