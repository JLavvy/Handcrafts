import React from 'react'
import "./Contact.css"

export const Contact = () => {
  return (
    <section className="contact-page">
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
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
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
                    <p className="info-text">123 Main Street, Anytown USA</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h3 className="info-title">Phone</h3>
                    <p className="info-text">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3 className="info-title">Email</h3>
                    <p className="info-text">info@handcrafts.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  )
}
