import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and School Name */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/Logo-RUS-Web.png.webp" alt="SMK Raden Umar Said Kudus" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>(0291) 430202</span>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-comment-dots"></i>
              <span>PPDB: 0895 0307 7886 (chat only)</span>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Jalan Sukun Raya No.09, Besito Kulon, Besito, Kec. Gebog, Kabupaten Kudus, Jawa Tengah 59333</span>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>contact@smkrus.sch.id</span>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://www.facebook.com/SMKRadenUmarSaid/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com/smkrus" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/smkrus_/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCHucsIv6yFY-gz-hnSLYSTA" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; 2024 SMK Raden Umar Said Kudus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;