import React, { useState } from "react";
import "./Contact.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        toast.success("Thank you for contacting us. We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error("Email already exists!!");
      });
  };

  return (
    <section id="contact">
      <h1 className="section-header">Get in touch with me </h1>
      <div className="contact-wrapper">
        <ToastContainer/>
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="form-horizontal"
          role="form"
        >
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <textarea
            className="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
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
