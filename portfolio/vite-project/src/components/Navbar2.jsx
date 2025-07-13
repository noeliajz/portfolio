import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <Navbar expand="lg" className="glass-navbar"  style={{ backgroundColor: '#111a22' }}>
      <Container>
        <Navbar.Brand href='/'>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/QuienSoy">Quién soy</Nav.Link>
            <Nav.Link as={Link} to="/MisProyectos">Mis proyectos</Nav.Link>
            <Nav.Link as={Link} to="/Certificados">Certificados</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
