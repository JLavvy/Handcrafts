import React from 'react'
//import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Landing.css'



export const Landing = () => {
    return (
        <div className="Landing-page">
          <Navbar className="custom-bg-color fixed-top" expand="lg" variant="dark">
                <Navbar.Brand href="#">My Lorem Ipsum</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#" active>Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Lorem</Nav.Link>
                        <NavDropdown title="Lorem" id="navbarDropdown">
                            <NavDropdown.Item href="#">Lorem</NavDropdown.Item>
                            <NavDropdown.Item href="#">Ipsum</NavDropdown.Item>
                            <NavDropdown.Item href="#">Lorem</NavDropdown.Item>
                            <NavDropdown.Item href="#">Ipsum</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="intro">
                <div className="intro-text">

                    <h1>Welcome to Our Handmade Crafts Emporium</h1>
                    <p>Discover a world of unique, one-of-a-kind handmade crafts at our enchanting niche store. Explore a curated<br /> collection of artisanal products that showcase the passion and talent of local makers.</p>

                </div>
                <div className="intro-buttons">
                    <button type="button" class="btn btn-light">Shop Now</button>
                    <button type="button" class="btn btn-dark">Learn Now</button>
                </div>
            </div>
        </div>
    )
}
