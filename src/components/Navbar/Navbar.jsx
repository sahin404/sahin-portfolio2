import React from 'react';
import './Navbar.css';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="name">Md. Sahin Alam</div>
      <div className="contact">
        <a href='https://www.linkedin.com/in/sahin404/' target="_blank" rel="noopener noreferrer" className="linkedin">
          <FaLinkedin />
        </a>
        <a href='https://github.com/sahin404' target="_blank" rel="noopener noreferrer" className="github">
          <FaGithub />
        </a>
        <a href='https://www.facebook.com/sahin404' target="_blank" rel="noopener noreferrer" className="facebook">
          <FaFacebook />
        </a>
        <a href='https://x.com/sahin404__' target="_blank" rel="noopener noreferrer" className="twitter">
          <FaXTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
