import { Navbar, Container, Nav} from 'react-bootstrap'

const NavbarComponent = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">News App</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link>News</Nav.Link>
							<Nav.Link>About Us</Nav.Link>
							<Nav.Link>Contact Us</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link>Sign Up</Nav.Link>
							<Nav.Link>Login</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default NavbarComponent