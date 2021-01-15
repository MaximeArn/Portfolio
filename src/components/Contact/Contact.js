import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import fieldsValidator from "../../utils/fieldValidator";
import "react-toastify/dist/ReactToastify.css";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./contact.scss";

const Contact = () => {
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const resetFields = () => {
      setFromName("");
      setFromEmail("");
      setSubject("");
      setText("");
    };

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
    fieldsValidated instanceof Error
      ? toast.warn(fieldsValidated.message)
      : axios
          .post("https://api.emailjs.com/api/v1.0/email/send", data)
          .then((res) => resetFields())
          .catch((err) => console.log(err));
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="contact" id="contact">
        <div className="contact-content">
          <div className="header">
            <h2>get in touch</h2>
            <div className="logos">
              <a href="https://github.com/MaximeArn">
                <i>
                  <FaGithub />
                </i>
              </a>
              <a href="https://twitter.com/MaximeARNOULD4">
                <i>
                  <FaTwitter />
                </i>
              </a>
              <a href="https://www.linkedin.com/in/maxime-arnould-337a031a3/">
                <i>
                  <FaLinkedinIn />
                </i>
              </a>
            </div>
          </div>
          <form onSubmit={sendEmail}>
            <div className="sender-infos">
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
            </div>
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
    </>
  );
};

export default Contact;
