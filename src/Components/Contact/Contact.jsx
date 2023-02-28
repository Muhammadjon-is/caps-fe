import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="section-header">Get in touch with me </h1>
      <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal" role="form">
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <button>
            <p>Send message </p> <i class="fa-solid fa-arrow-right-long"></i>
          </button>
          
          
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">City: Katowice</span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">Phone: 519792602</span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">
                    Mail: isakovw18@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <hr />
       
         
        </div>
      </div>









    </section>
  );
};

export default Contact;
