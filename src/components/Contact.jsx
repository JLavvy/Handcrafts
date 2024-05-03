import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Contact.css';

export const Contact = () => {
  return (
    <div>
      <Navbar className="custom-navbar" expand="lg" variant="dark" fixed="top">
        <Navbar.Brand href="#">My Lorem Ipsum</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Nav.Link href="/" active>
              Home
            </Nav.Link>
            <Nav.Link href="/AboutUs">About</Nav.Link>
            <Nav.Link href="/Shop">Shop</Nav.Link>
            
            {/*<Nav.Link href="#">Lorem</Nav.Link>
              <NavDropdown title="Lorem" id="navbarDropdown">
                <NavDropdown.Item href="#">Lorem</NavDropdown.Item>
                <NavDropdown.Item href="#">Ipsum</NavDropdown.Item>
                <NavDropdown.Item href="#">Lorem</NavDropdown.Item>
                <NavDropdown.Item href="#">Ipsum</NavDropdown.Item>
  </NavDropdown>*/}
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div className="contact-page">
        <div className="contact-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="contact-heading">Get in Touch</h1>
                <p className="contact-subheading">We'd love to hear from you!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-form-container">
                  <h2 className="form-heading">Send Us a Message</h2>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control custom-input"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control custom-textarea"
                        rows="5"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary cont-btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-info-container">
                  <h2 className="info-heading">Contact Information</h2>
                  <div className="contact-info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h3 className="info-title">Address</h3>
                      <p className="info-text">Umoja Innercore, Nabuto</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <i className="fas fa-phone"></i>
                    <div>
                      <h3 className="info-title">Phone</h3>
                      <p className="info-text">+254 772750018</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h3 className="info-title">Email</h3>
                      <a href="mailto:info@handcrafts.com" target="_blank" rel="noopener noreferrer">info@handcrafts.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-map-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h2 className="map-heading"><i>Find Us on the Map</i></h2>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15955.25295423494!2d36.90035065!3d-1.2860885999999998!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1714740278266!5m2!1sen!2ske"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};