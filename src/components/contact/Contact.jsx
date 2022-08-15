import React, { useState, useContext, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { SwitchContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [message, setMessage] = useState(false);
  const initialFormState = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const theme = useContext(SwitchContext);
  const darkMode = theme.state.darkMode;

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fcnr50e",
        "template_m7wm8fi",
        formRef.current,
        "7hoWKtugnnSAxToOY"
      )
      .then(
        (result) => {
          setMessage(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const inputName = name;
    const updatedFormState = { ...formState };
    updatedFormState[inputName] = value;
    setFormState(updatedFormState);
  };

  return (
    <div id="contact" className={`c ${darkMode ? "dark" : "light"}`}>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title secondary-heading">Let's get in touch!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <i className="c-icon fa-solid fa-envelope"></i>
              <div className="c-info-item--text">akshay5632@gmail.com</div>
              {/* <img src={Email} alt="" className="c-icon" /> */}
            </div>
            <div className="c-info-item">
              <i className="c-icon fa-solid fa-location-dot"></i>
              <div className="c-info-item--text"> Bengaluru, Karnataka</div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc tertiary-heading">
            If you'd like to hire me, enquire about my rates or give me feedback
            of any kind, I'll be <strong>delighted to hear from you.</strong>
            <br />
          </p>
          <form className="c-form" ref={formRef} onSubmit={handleSubmit}>
            <input
              // ref={inputRef}
              className="c-form-input input"
              type="text"
              placeholder="Name"
              name="name"
              value={formState.name}
              onChange={changeHandler}
            />
            <input
              className="c-form-input input"
              type="text"
              placeholder="Subject"
              name="subject"
              value={formState.subject}
              onChange={changeHandler}
            />
            <input
              className="c-form-input input"
              type="text"
              placeholder="Email"
              name="email"
              value={formState.email}
              onChange={changeHandler}
            />
            <textarea
              className="c-form-input message"
              rows="5"
              placeholder="Message"
              name="message"
              value={formState.message}
              onChange={changeHandler}
            />
            <button className="btn btn-submit">Submit</button>
            <p className="user-success">
              {message && "Thank you, I shall get back to you ASAP! :)"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
