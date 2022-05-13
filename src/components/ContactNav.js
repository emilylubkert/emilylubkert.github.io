
import { Navbar, Container, Offcanvas, Nav, Image } from 'react-bootstrap';

import '../styles.css';
import '../components.css'

function ContactNav() {


  return (
    <Navbar bg="light" expand={false}>
    <Container fluid>
      <Navbar.Brand>Contact Me</Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Hi!</Offcanvas.Title>
          <Image fluid style={{maxHeight: '80%'}} rounded src="/desk_photo.jpg" alt="Emily at desk"/>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link className="contact-link" href="https://github.com/emilylubkert">Find Me on Github</Nav.Link>
            <Nav.Link className="contact-link"href="https://www.linkedin.com/in/emilylubkert/">Connect on LinkedIn</Nav.Link>
            <Nav.Link className="contact-link"href="mailto:elubkert@gmail.com">Email Me</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>

  );
}

export default ContactNav;
