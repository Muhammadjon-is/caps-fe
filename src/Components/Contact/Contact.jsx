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

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, message } = formData;
  
    if (!name || !email || !message) {
      toast.error("Please fill in all fields", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setSubmitStatus("error");
      return;
    }
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log(data);
  
      setFormData({
        name: "",
        email: "",
        message: "",
      });
  
      toast.success("Success Notification !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setSubmitStatus("success");
    } catch (error) {
      console.error(error);
      toast.warning("Error sending message", {
        position: toast.POSITION.TOP_LEFT,
      });
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact">
      <h1 className="section-header">Get in touch with me </h1>
      <div className="contact-wrapper">
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
        {submitStatus === "success" && (
          <div className="form-submit-message success">
          
            {toast.success("Success Notification !", {
              position: toast.POSITION.BOTTOM_RIGHT,
            })}
          </div>
        )}

        {submitStatus === "error" && (
          <div className="form-submit-message error">
            {toast.warning("Warning Notification !", {
              position: toast.POSITION.TOP_LEFT,
            })}
          </div>
        )}

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
