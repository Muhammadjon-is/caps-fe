import React from 'react'
import img from "../../assets/img1.jpg"
import { Carousel } from 'react-bootstrap'
import LoginContainer from '../Login.jsx/LoginContainer'
import { Link } from 'react-router-dom'
import "./Home.css"
import brake from "../../assets/parts.jpeg"
const Home = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <div
        className="d-block w-100 main_slider"
        style={{
          backgroundImage: `url(${img})`,
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
          backgroundImage: `url(${img})`,
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
          backgroundImage: `url(${img})`,
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

</div>
  )
}

export default Home