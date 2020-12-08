import React, { useState, useEffect } from "react";
import { init } from "emailjs-com";
import "./contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    init("user_k3QZRYPdVhHQYa0nSIhvj");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(email, name, subject, text);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div className="header">
          <h2>get in touch</h2>
          <div className="logos"></div>
        </div>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={({ target: { value } }) => setSubject(value)}
          />
          <textarea
            name="text"
            placeholder="Write Your Message Here"
            value={text}
            onChange={({ target: { value } }) => setText(value)}
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
