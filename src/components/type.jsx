import React from 'react'
import "./type.css"

export const Type = () => {
  
  return (
    <section className="craft-types-section">
      <div className="parallax-bg"></div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="section-heading text-center mb-5">Handmade Crafts</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="craft-item">
            <div className="craft-image">
              <img src="https://via.placeholder.com/300x200" alt="Craft Type 1" className="img-fluid" />
              <div className="craft-overlay">
                <div className="craft-details">
                  <h3 className="craft-title">Pottery</h3>
                  <p className="craft-description">Explore our exquisite collection of handcrafted pottery pieces, each one a unique work of art.</p>
                  <a href="#" className="btn btn-primary">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="craft-item">
            <div className="craft-image">
              <img src="https://via.placeholder.com/300x200" alt="Craft Type 2" className="img-fluid" />
              <div className="craft-overlay">
                <div className="craft-details">
                  <h3 className="craft-title">Woodwork</h3>
                  <p className="craft-description">Discover the beauty of handcrafted woodwork pieces, perfect for adding warmth and character to your home.</p>
                  <a href="#" className="btn btn-primary">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="craft-item">
            <div className="craft-image">
              <img src="https://via.placeholder.com/300x200" alt="Craft Type 3" className="img-fluid" />
              <div className="craft-overlay">
                <div className="craft-details">
                  <h3 className="craft-title">Jewelry</h3>
                  <p className="craft-description">Adorn yourself with our stunning handmade jewelry pieces, each one a unique expression of art and craftsmanship.</p>
                  <a href="#" className="btn btn-primary">Shop Now</a>
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
