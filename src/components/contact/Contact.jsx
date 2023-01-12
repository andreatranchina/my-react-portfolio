import React, {useRef} from 'react'
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md";

import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_onkvy5l', 'template_8l56pgo', form.current, 'zcuj919dP6qKYpg1x')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className= "container contact-container">
      <div className= "contact-options">
        <article className="contact-option">
          <MdOutlineEmail className="contact-option-icon"/>
          <h4>Email</h4>
          <h5>Andrea.Tranchina82@gmail.com</h5>
          <a href="mailto:Andrea.Tranchina82@gmail.com" target="_blank">Write Message → </a>
        </article>

      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" rows="5" placeholder="Message" required ></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact