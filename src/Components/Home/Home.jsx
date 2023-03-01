import React from 'react'
import { Carousel } from 'react-bootstrap'
import LoginContainer from '../Login.jsx/LoginContainer'
import { Link } from 'react-router-dom'
import "./Home.css"
import  gamer from "../../assets/gamer.jpg"
import slider1 from "../../assets/slider1.jpg"
import slider2 from "../../assets/slider2.jpg"
import slider3 from "../../assets/slider3.jpg"
const Home = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <div
        className="d-block w-100 main_slider"
        style={{
          backgroundImage: `url(${slider1})`,
        }}
      >
        <div className="container fill_height">
          <div className="row align-items-center fill_height">
            <div className="col">
              <div className="main_slider_content" data-aos="fade-right">
                
                <h1>Get up to 30% Off New Arrivals</h1>
                <div className="red_button shop_now_button">
                  <a href="#">shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="d-block w-100 main_slider"
        style={{
          backgroundImage: `url(${slider2})`,
        }}
      >
        <div className="container fill_height">
          <div className="row align-items-center fill_height">
            <div className="col">
              <div className="main_slider_content" data-aos="fade-right">
                
                <h1>Get up to 30% Off New Arrivals</h1>
                <div className="red_button shop_now_button">
                  <a href="#">shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="d-block w-100 main_slider"
        style={{
          backgroundImage: `url(${slider3})`,
        }}
      >
        <div className="container fill_height">
          <div className="row align-items-center fill_height">
            <div className="col">
              <div className="main_slider_content" data-aos="fade-right">
               
                <h1>Get up to 30% Off New Arrivals</h1>
                <div className="red_button shop_now_button">
                  <a href="#">shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
  <LoginContainer class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src={gamer}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={gamer}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>iWatch </h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={gamer}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>iWatch </h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={gamer}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>iWatch </h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={gamer}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>iWatch </h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoginContainer>
</div>
  )
}

export default Home