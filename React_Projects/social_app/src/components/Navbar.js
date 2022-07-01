import React from 'react'
import icon from '../assets/icon.png'
import {Navbar, Nav, Container} from 'react-bootstrap'

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
        <img
            src={icon}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
        />{' '}
            Social App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Photos</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link>Sign Up</Nav.Link>
            <Nav.Link>Login
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default NavbarComponent