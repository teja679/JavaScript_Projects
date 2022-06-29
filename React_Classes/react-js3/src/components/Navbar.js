import React, { Component } from 'react'
import {Navbar as BootstrapNavbar, Container, Nav} from 'react-bootstrap'


class Navbar extends Component {

  render() {
    return (
        <BootstrapNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <BootstrapNavbar.Brand href="#home">
            <img
              alt="logo"
              src="https://aroundsketch.github.io/Apple-App-Icons/App%20Icon/Apple/AppleStore/@PNG.png"
              width="30"
              height="30"
              className="d-inline-block align-top" 
              style = {{}}
            />{' '}
            Max's Shopping App
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BootstrapNavbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Sign Up</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Login
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>  
      </BootstrapNavbar>
    )
  }
}

export default Navbar