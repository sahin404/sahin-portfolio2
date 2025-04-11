import React from 'react'
import './Navbar.css'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="name">Md. Sahin Alam</div>
            <div className="contact">
               <a href='https://www.linkedin.com/in/sahin404/'><FaLinkedin className='linkedin' /></a> 
               <a href='https://github.com/sahin404'><FaGithub className='github' /></a>
               <a href='https://www.facebook.com/sahin404'><FaFacebook className='github' /></a>
               <a href='https://x.com/sahin404__'><FaXTwitter className='github' /></a>
            </div>
        </div>
    )
}

export default Navbar