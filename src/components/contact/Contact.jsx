import React, { useState, useContext, useRef } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [message, setMessage] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const contactRef = useRef(null);

  const textExample = () => {
    console.log("hello");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fcnr50e",
        "template_m7wm8fi",
        formRef.current,
        "7hoWKtugnnSAxToO"
        // Y
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className={`c ${darkMode ? "dark" : "light"}`}>
      <div className="c-bg"></div>
      <div ref={contactRef} className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's get in touch!</h1>
          <div className="c-info">
            {/* <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" /> +91 123456789
            </div> */}
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" /> akshay5632@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" /> Bengaluru,
              Karnataka
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            If you'd like to hire me, enquire about my rates or give me feedback
            of any kind, I'll be <strong>delighted to hear from you.</strong>
            <br />
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button className="btn btn-submit">Submit</button>
            <p className="user_success">
              {message && "Thank you, I shall get back to you ASAP! :)"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
