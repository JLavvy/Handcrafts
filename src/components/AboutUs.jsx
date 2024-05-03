import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './AboutUs.css';


export const AboutUs = () => {
  return (
    <div>
        <Navbar
          className="custom-navbar"
          expand="lg"
          variant="dark"
          fixed="top"
        >
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

    
    <div className="about-us">
    <section className="hero-section">
      <div className="overlay"></div>
      <Container>
        <Row>
          <Col md={6} className="hero-text">
            <h1>About Our Handcrafts Studio</h1>
            <p>
              Discover the story behind our passion for handcrafted creations
              and the artisans who bring them to life.
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="values-section">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Our Values</h2>
            <p>
              At our handcrafts studio, we believe in celebrating the art of
              craftsmanship and preserving traditional techniques. Each piece
              is a labor of love, meticulously crafted by skilled artisans who
              pour their hearts into every detail.
            </p>
            <ul className="values-list">
              <li>
               Passion for Creativity.
              </li>
              <li>
                Ethical and Sustainable Practices.
              </li>
              <li>
                Embracing Cultural Diversity.
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <div className="values-image">
              <img
                src="values.jpeg"
                alt="Our Values"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="process-section">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-center">Our Process</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Sourcing Materials</h3>
              <p>
                We carefully source high-quality, sustainable materials from
                ethical suppliers to ensure our products are eco-friendly and
                socially responsible.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Handcrafting</h3>
              <p>
                Our skilled artisans meticulously craft each piece by hand,
                infusing it with their unique creativity and attention to
                detail.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Quality Assurance</h3>
              <p>
                Every creation undergoes rigorous quality checks to ensure it
                meets our high standards before reaching your doorstep.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="team-section">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-center">Meet Our Team</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="team-member">
              <div className="member-image">
                <img
                  src="man-icon.png"
                  alt="Team Member"
                  className="img-fluid rounded-circle"
                />
              </div>
              <h3>Johny Bravvo</h3>
              <p>Founder and Lead Artisan</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="team-member">
              <div className="member-image">
                <img
                  src="woman-icon.jpg"
                  alt="Team Member"
                  className="img-fluid rounded-circle"
                />
              </div>
              <h3>Janet Smith</h3>
              <p>Master Woodworker</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="team-member">
              <div className="member-image">
                <img
                  src="woman2.png"
                  alt="Team Member"
                  className="img-fluid rounded-circle"
                />
              </div>
              <h3>Elizabeth Pendo</h3>
              <p>Skilled Potter</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
  </div>
  )
}
