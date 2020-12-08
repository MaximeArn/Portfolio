import React, { useState } from "react";
import axios from "axios";
import fieldsValidator from "../../utils/fieldValidator";
import "./contact.scss";

const Contact = () => {
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const data = {
      service_id: process.env.SERVICE_ID,
      template_id: process.env.TEMPLATE_ID,
      user_id: process.env.USER_ID,
      template_params: {
        fromName,
        fromEmail,
        subject,
        text,
      },
    };

    const fieldsValidated = fieldsValidator(data.template_params);
    fieldsValidated
      ? // axios
        //     .post("https://api.emailjs.com/api/v1.0/email/send", data)
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err))
        console.log("send mail")
      : console.log(fieldsValidated);
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
            required
            type="text"
            name="name"
            placeholder="Full Name"
            value={fromName}
            onChange={({ target: { value } }) => setFromName(value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={fromEmail}
            onChange={({ target: { value } }) => setFromEmail(value)}
          />
          <input
            required
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={({ target: { value } }) => setSubject(value)}
          />
          <textarea
            required
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
