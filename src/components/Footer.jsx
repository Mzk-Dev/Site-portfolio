import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__info">
            <h3 className="footer__name">Maksym Cherenov</h3>
            <p className="footer__title">Full Stack Developer</p>
          </div>

          <div className="footer__links">
            <a href="#experience" className="footer__link">Experience</a>
            <a href="#education" className="footer__link">Education</a>
            <a href="mailto:maximkasupp@gmail.com" className="footer__link">Contact</a>
          </div>

          <div className="footer__social">
            <a 
              href="https://github.com/Mzk-Dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/max-cherenov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:maximkasupp@gmail.com"
              className="footer__social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a 
              href="tel:+380999674439"
              className="footer__social-link"
              aria-label="Phone"
            >
              <FaPhone />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 Maksym Cherenov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
