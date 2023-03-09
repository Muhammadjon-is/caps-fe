import React from 'react'
import Marquee from "react-fast-marquee"
import LoginContainer from '../Login.jsx/LoginContainer'
import msi from "../../assets/1.png"
import sony from "../../assets/2.png"
import alien from "../../assets/3.png"
import acer from "../../assets/4.png"
import lenovo from "../../assets/5.png"
import dell from "../../assets/6.png"
import hp from "../../assets/7.png"
import asus from "../../assets/9.png"

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
                  <img src={msi} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={sony} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={alien} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={acer} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={lenovo} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={dell} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={hp} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={asus} alt="brand" />
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