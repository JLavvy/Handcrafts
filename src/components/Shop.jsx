import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const Shop = () => {
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

    </div>
  )
}
