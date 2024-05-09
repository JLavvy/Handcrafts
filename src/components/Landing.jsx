import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export const Landing = () => {
  return (
    <div>
      <div className="Landing-page">
        <Navbar
          className="custom-navbar"
          expand="lg"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand href="/">CraftyArtisanMarket</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto">
              <Nav.Link href="/" active>
                Home
              </Nav.Link>
              <Nav.Link href="/AboutUs">About</Nav.Link>
              <Nav.Link href="/Products">Products</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="intro">
          <div className="intro-overlay"></div>
          <div className="intro-content">
            <div className="intro-text">
              <h1>Welcome to Our Handmade Crafts Emporium</h1>
              <p>
                Discover a world of unique, one-of-a-kind handmade crafts at our
                enchanting niche store. Explore a curated
                <br /> collection of artisanal products that showcase the passion
                and talent of local makers.
              </p>
            </div>
            <div className="intro-buttons">
              <a href="/Products" className="btn btn-light intro-btn">View Products</a>

            </div>
          </div>


        </div>
      </div>

      {/*about*/}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="section-heading head-about text-center mb-5">About Our Handcrafts</h1>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="/pexels-karolina-grabowska-6634704.jpg"
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
              <a href="/AboutUs" className="btn btn-primary custom-btn">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/*type*/}
      <section className="craft-types-section">
        <div className="parallax-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-heading head-type text-center mb-5">Handmade Crafts</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="craft-item">
                <div className="craft-image">
                  <img src="pottery.jpg" alt="Craft Type 1" className="img-fluid" />
                  <div className="craft-overlay">
                    <div className="craft-details">
                      <h3 className="craft-title">Pottery</h3>
                      <p className="craft-description">Explore our exquisite collection of handcrafted pottery pieces, each one a unique work of art.</p>
                      {/* <a href="#" className="btn btn-primary type-btn">Explore Our Collection</a>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="craft-item">
                <div className="craft-image">
                  <img src="woodwork.jpg" alt="Craft Type 2" className="img-fluid" />
                  <div className="craft-overlay">
                    <div className="craft-details">
                      <h3 className="craft-title">Woodwork</h3>
                      <p className="craft-description">Discover the beauty of handcrafted woodwork pieces, perfect for adding warmth and character to your home.</p>
                      {/* <a href="#" className="btn btn-primary type-btn">Explore Our Collection</a>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="craft-item">
                <div className="craft-image">
                  <img src="jewellery.jpg" alt="Craft Type 3" className="img-fluid" />
                  <div className="craft-overlay">
                    <div className="craft-details">
                      <h3 className="craft-title">Jewelry</h3>
                      <p className="craft-description">Adorn yourself with our stunning handmade jewelry pieces, each one a unique expression of art and craftsmanship.</p>
                     {/*<a href="#" className="btn btn-primary type-btn">Explore Our Collection</a>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*artists*/}
      <section className="artists-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-heading head-artists text-center mb-5">Featured Artists</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="artist-card">
                <div className="artist-image">
                  <img src="man-icon.png" alt="Artist 1" className="img-fluid rounded-circle" />
                </div>
                <div className="artist-details">
                  <h3 className="artist-name">John Doe</h3>
                  <p className="artist-bio">
                    John is a skilled potter who has been crafting exquisite ceramics for over 20 years. His unique glazing techniques and intricate designs have earned him widespread recognition.
                  </p>
                  {/*<a href="#" className="btn btn-primary art-btn">View Works</a>*/}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="artist-card">
                <div className="artist-image">
                  <img src="woman-icon.jpg" alt="Artist 2" className="img-fluid rounded-circle" />
                </div>
                <div className="artist-details">
                  <h3 className="artist-name">Jane Smith</h3>
                  <p className="artist-bio">
                    Jane is a talented woodworker who creates stunning furniture pieces and home decor items. Her work is inspired by nature and celebrates the beauty of sustainable materials.
                  </p>
                  {/*<a href="#" className="btn btn-primary art-btn">View Works</a>*/}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="artist-card">
                <div className="artist-image">
                  <img src="woman2.png" alt="Artist 3" className="img-fluid rounded-circle" />
                </div>
                <div className="artist-details">
                  <h3 className="artist-name">Michelle Johnson</h3>
                  <p className="artist-bio">
                    Michael is a skilled jeweler who crafts unique and intricate pieces using a combination of traditional and modern techniques. Her designs are influenced by various cultures and tell captivating stories.
                  </p>
                  {/*<a href="#" className="btn btn-primary art-btn">View Works</a>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*bestsellers*/}
      <section className="best-sellers-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-heading head-seller text-center mb-5">Best Sellers</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <img src="wood1.jpg" alt="Product 1" className="img-fluid" />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Product Title</h3>
                  <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  {/*<a href="#" className="btn btn-primary sell-btn">Buy Now</a>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <img src="pot2.webp" alt="Product 1" className="img-fluid" />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Product Title</h3>
                  <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  {/*<a href="#" className="btn btn-primary sell-btn">Buy Now</a>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <img src="necklace.jpg" alt="Product 1" className="img-fluid" />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Product Title</h3>
                  <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  {/*<a href="#" className="btn btn-primary sell-btn">Buy Now</a>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <img src="pot1.jpg" alt="Product 1" className="img-fluid" />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Product Title</h3>
                  <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  {/*<a href="#" className="btn btn-primary sell-btn">Buy Now</a>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <img src="Best-Wood-Craft.webp" alt="Product 1" className="img-fluid" />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Product Title</h3>
                  <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  {/*<a href="#" className="btn btn-primary sell-btn">Buy Now</a>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <img src="bracelet.webp" alt="Product 1" className="img-fluid" />
                </div>
                <div className="product-details">
                  <h3 className="product-title">Product Title</h3>
                  <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  {/*<a href="#" className="btn btn-primary sell-btn">Buy Now</a>*/}
                </div>
              </div>
            </div>
            {/* Add more product cards */}
          </div>
        </div>
      </section>

      {/*testimony*/}
      <section className="testimonials-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-heading head-testimony text-center mb-5">~Testimonials~</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <Carousel>
                <Carousel.Item>
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <img src="man-icon.png" alt="Customer 1" className="img-fluid rounded-circle" />
                    </div>
                    <div className="testimonial-details">
                      <h3 className="customer-name">John Smith</h3>
                      <p className="customer-location">Nairobi, Kenya</p>
                      <blockquote className="testimonial-text">
                        "I'm absolutely in love with the handcrafted pottery pieces I bought from your website. The attention to detail and unique designs are truly exceptional. It's evident that these were made with passion and care."
                      </blockquote>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <img src="woman2.png" alt="Customer 2" className="img-fluid rounded-circle" />
                    </div>
                    <div className="testimonial-details">
                      <h3 className="customer-name">Janet Lockwood</h3>
                      <p className="customer-location">Nakuru, Kenya</p>
                      <blockquote className="testimonial-text">
                        "I recently purchased a handmade wooden table from your collection, and it's absolutely stunning. The craftsmanship is impeccable, and the piece adds a warm and unique touch to my home. Supporting local artisans has never been more rewarding."
                      </blockquote>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <img src="woman-icon.jpg" alt="Customer 3" className="img-fluid rounded-circle" />
                    </div>
                    <div className="testimonial-details">
                      <h3 className="customer-name">Elena Gilbert</h3>
                      <p className="customer-location">Mombasa, Kenya</p>
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

    </div>
  );
};