import React from "react";
import "./Footer.css";
import logo from "../../Assets/UDAC_Logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Logo and About */}
        <div className="footer-col">
          <img src={logo} alt="Uma Design & Construction" className="footer-logo" />
          <p className="footer-about">
            Our mission is to create quality spaces
            that inspire trust and build lasting relationships.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            {/* <li><a href="/projects">Projects</a></li> */}
            <li><a href="/career">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h3 className="footer-heading">Resources</h3>
          <ul className="footer-links">
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          
          </div>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Uma Design & Construction. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;