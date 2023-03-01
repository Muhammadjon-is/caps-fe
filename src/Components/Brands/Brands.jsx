import React from 'react'
import Marquee from "react-fast-marquee"
import LoginContainer from '../Login.jsx/LoginContainer'
import brandImage from "../../assets/brand-01.png"
import "./Brands.css"

const Brands = () => {
  return (
    <div>
 <LoginContainer class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={brandImage} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brandImage} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brandImage} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brandImage} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brandImage} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brandImage} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brandImage} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brandImage} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </LoginContainer>
    </div>
  )
}

export default Brands