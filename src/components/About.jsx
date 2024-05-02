import React from 'react'

import './About.css'

export const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-heading text-center mb-5">About Our Handcrafts</h1>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src="public\pexels-karolina-grabowska-6634704.jpg"
              alt="About"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="section-title">Our Story</h2>
            <p className="section-description">
              At our handcrafts studio, we believe in the beauty of handmade
              art. Each piece is meticulously crafted with passion and
              attention to detail, ensuring that every creation is truly
              one-of-a-kind.
            </p>
            <p className="section-description">
              Our skilled artisans draw inspiration from nature, cultural
              traditions, and personal experiences, infusing each work with
              a unique story and character. From intricate jewelry to
              handwoven textiles, our collection celebrates the diversity
              of craftsmanship and the rich heritage of artisanal
              techniques.
            </p>
            <a href="#" className="btn btn-primary">Explore Our Collection</a>
          </div>
        </div>
      </div>
    </section>
  )
}
