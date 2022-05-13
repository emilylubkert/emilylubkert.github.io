import { Navbar, Nav, Container } from 'react-bootstrap'
import '../styles.css'

function NavBar() {

  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href='/'>Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    {/* <Nav className="me-auto">
      <Nav.Link href='/projects/'>My Projects</Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar;
