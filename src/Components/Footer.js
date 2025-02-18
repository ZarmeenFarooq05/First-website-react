import React from 'react';
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return(
        <div className='footer-wrapper'>
            <div className='footer-section-one'>
                <div className="footer-logo-container">
                    <img src={Logo} />
                </div>

                <div className='footer-icons'>
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube />
                    <FaFacebook />
                </div>
            </div>
            <div className='footer-section-coloumns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Carrers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className='footer-section-columns'>
                <span>233-6544-8893</span>
                <span>what@gmail.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
            </div>
            <div className='footer-section-columns'>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    );
}

export default Footer;