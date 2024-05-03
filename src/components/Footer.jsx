import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <h5 className="footer-heading">About</h5>
            <p className="footer-text">
              Welcome to our handcrafts website, where we celebrate the art of
              craftsmanship and bring you the finest handmade creations.
            </p>
          </div>

          <div className="col-md-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
            <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>

              <li>
                <a href="/AboutUs" className="footer-link">
                  About Us
                </a>
              </li>

              <li>
                <a href="/Shop" className="footer-link">
                  Shop
                </a>
              </li>
              
              <li>
                <a href="/Contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="footer-heading">Connect With Us</h5>
            <ul className="social-icons">
              <li>
                <a href="#" className="social-icon">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="footer-copyright">
                &copy; {new Date().getFullYear()} Handcrafts Website. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};