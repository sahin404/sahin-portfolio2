import React from "react";
import "./Contact.css";
import { FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">I would like to work with you ...</p>

      <div className="contact-links">
        <a href="https://www.linkedin.com/in/sahin404" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-icon">
            <FaLinkedin className="linkedin-icon" />
          </div>
          <div className="contact-info">
            <h3 className="contact-name">LinkedIn</h3>
            <p className="contact-description">Click here to send me a message on LinkedIn...</p>
          </div>
          <FaExternalLinkAlt className="external-icon" />
        </a>

        <a href="mailto:sahinraj20@gmail.com" className="contact-card">
          <div className="contact-icon">
            <SiGmail className="email-icon" />
          </div>
          <div className="contact-info">
            <h3 className="contact-name">Email</h3>
            <p className="contact-description">Click here to send me an email...</p>
          </div>
          <FaExternalLinkAlt className="external-icon" />
        </a>
      </div>

      <footer className="footer">
        © 2025, Md. Sahin Alam
      </footer>
    </div>
  );
}

export default Contact;
