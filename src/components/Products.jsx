import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import "./Products.css"

export const Products = () => {
  return (
    <div>
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

      <section className="hero-section-type">
        <div className="overlay-type"></div>
        <Container>
          <Row>
            <Col md={6} className="hero-text-type">
              <h1>Handcrafted Treasures</h1>
              <p>Discover the beauty of artisanal craftsmanship</p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="products-container">

        <div className="type-header">
          WoodWork
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="product-card">
              <div className="product-image">
                <img src="WW-1.webp" alt="Product 1" className="img-fluid" />
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
                <img src="woodwork.jpg" alt="Product 1" className="img-fluid" />
              </div>
              <div className="product-details">
                <h3 className="product-title">Product Title</h3>
                <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                {/*<a href="#" className="btn btn-primary sell-btn">Buy Now</a>*/}
              </div>
            </div>
          </div>

          <div className="type-header">
            Pottery 
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="product-card">
              <div className="product-image">
                <img src="P-1.png" alt="Product 1" className="img-fluid" />
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
                <img src="P-2.jpg" alt="Product 1" className="img-fluid" />
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
                <img src="P-3.jpg" alt="Product 1" className="img-fluid" />
              </div>
              <div className="product-details">
                <h3 className="product-title">Product Title</h3>
                <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                {/*<a href="#" className="btn btn-primary sell-btn">Buy Now</a>*/}
              </div>
            </div>
          </div>

          <div className="type-header">
            Jewellery
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="product-card">
              <div className="product-image">
                <img src="j-1.jpg" alt="Product 1" className="img-fluid" />
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
                <img src="j-2.jpg" alt="Product 1" className="img-fluid" />
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
                <img src="j-3.jpg" alt="Product 1" className="img-fluid" />
              </div>
              <div className="product-details">
                <h3 className="product-title">Product Title</h3>
                <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                {/*<a href="#" className="btn btn-primary sell-btn">Buy Now</a>*/}
              </div>
            </div>
          </div>


          <div className="type-header">
            Basket Weaving
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="product-card">
              <div className="product-image">
                <img src="WB-3.jpeg" alt="Product 1" className="img-fluid" />
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
                <img src="BW-2.jpg" alt="Product 1" className="img-fluid" />
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
                <img src="WB-4.webp" alt="Product 1" className="img-fluid" />
              </div>
              <div className="product-details">
                <h3 className="product-title">Product Title</h3>
                <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                {/*<a href="#" className="btn btn-primary sell-btn">Buy Now</a>*/}
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}
