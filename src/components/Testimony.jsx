import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Testimony.css"

export const Testimony = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-heading text-center mb-5">What Our Customers Say</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Carousel>
              <Carousel.Item>
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img src="https://via.placeholder.com/100x100" alt="Customer 1" className="img-fluid rounded-circle" />
                  </div>
                  <div className="testimonial-details">
                    <h3 className="customer-name">John Doe</h3>
                    <p className="customer-location">New York, USA</p>
                    <blockquote className="testimonial-text">
                      "I'm absolutely in love with the handcrafted pottery pieces I bought from your website. The attention to detail and unique designs are truly exceptional. It's evident that these were made with passion and care."
                    </blockquote>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img src="https://via.placeholder.com/100x100" alt="Customer 2" className="img-fluid rounded-circle" />
                  </div>
                  <div className="testimonial-details">
                    <h3 className="customer-name">Jane Smith</h3>
                    <p className="customer-location">London, UK</p>
                    <blockquote className="testimonial-text">
                      "I recently purchased a handmade wooden table from your collection, and it's absolutely stunning. The craftsmanship is impeccable, and the piece adds a warm and unique touch to my home. Supporting local artisans has never been more rewarding."
                    </blockquote>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img src="https://via.placeholder.com/100x100" alt="Customer 3" className="img-fluid rounded-circle" />
                  </div>
                  <div className="testimonial-details">
                    <h3 className="customer-name">Michael Johnson</h3>
                    <p className="customer-location">Sydney, Australia</p>
                    <blockquote className="testimonial-text">
                      "The handcrafted jewelry pieces I purchased are absolutely breathtaking. Each piece is a true work of art, and I can feel the love and dedication that went into making them. I'm proud to support such talented artisans."
                    </blockquote>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
