import React from "react";
import "./contact.scss";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div className="header">
          <h2>get in touch</h2>
          <div className="logos"></div>
        </div>
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Enter Your Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea
            name="text"
            placeholder="Write Your Message Here"
          ></textarea>
          <div className="submit-wrapper">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
