import React from 'react'
import "./artists.css"

export const Artists = () => {
  return (
    <section className="artists-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-heading text-center mb-5">Featured Artists</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="artist-card">
              <div className="artist-image">
                <img src="https://via.placeholder.com/300x300" alt="Artist 1" className="img-fluid rounded-circle" />
              </div>
              <div className="artist-details">
                <h3 className="artist-name">John Doe</h3>
                <p className="artist-bio">
                  John is a skilled potter who has been crafting exquisite ceramics for over 20 years. His unique glazing techniques and intricate designs have earned him widespread recognition.
                </p>
                <a href="#" className="btn btn-primary">View Works</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="artist-card">
              <div className="artist-image">
                <img src="https://via.placeholder.com/300x300" alt="Artist 2" className="img-fluid rounded-circle" />
              </div>
              <div className="artist-details">
                <h3 className="artist-name">Jane Smith</h3>
                <p className="artist-bio">
                  Jane is a talented woodworker who creates stunning furniture pieces and home decor items. Her work is inspired by nature and celebrates the beauty of sustainable materials.
                </p>
                <a href="#" className="btn btn-primary">View Works</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="artist-card">
              <div className="artist-image">
                <img src="https://via.placeholder.com/300x300" alt="Artist 3" className="img-fluid rounded-circle" />
              </div>
              <div className="artist-details">
                <h3 className="artist-name">Michael Johnson</h3>
                <p className="artist-bio">
                  Michael is a skilled jeweler who crafts unique and intricate pieces using a combination of traditional and modern techniques. His designs are influenced by various cultures and tell captivating stories.
                </p>
                <a href="#" className="btn btn-primary">View Works</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
