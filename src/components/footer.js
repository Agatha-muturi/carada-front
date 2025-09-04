// src/components/Footer.js
import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-left">
          <h2>Car Rada 🚘</h2>
          <p>Smart Traffic Updates for Kenyan Roads</p>
        </div>

        {/* Middle section */}
        <div className="footer-middle">
          <h3>Contact</h3>
          <p><FaEnvelope /> info@carrada.com</p>
          <p><FaPhone /> +254 707 143 909</p>
        </div>

        {/* Right section */}
        <div className="footer-right">
          <h3>Connect</h3>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Car Rada. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

