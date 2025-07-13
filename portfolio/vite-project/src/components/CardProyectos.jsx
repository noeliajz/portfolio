import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import controlStock from '../assets/controlStock.jpg';
import ps from '../assets/ps.jpg';

const CardProyectos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh(); 
  }, []);

  return (
    <Container fluid className="colorFondo py-5" style={{height:"100vh"}}>
      <Row className="justify-content-center ">
        <Col xs={12} md={6} className=" d-flex justify-content-center mb-4">
          <Card data-aos="zoom-in" style={{ width: "100%", maxWidth: "18rem" }}>
            <Card.Img variant="top" src={ps} />
            <Card.Body className="text-center">
              <Card.Title>PS2</Card.Title>
              <Card.Text>
                Sistema web para la práctica supervisada de mi carrera
                universitaria.
              </Card.Text>
              <a
                href="https://practica-supervisada.netlify.app/"
                className="px-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </a>
              <a
                href="https://github.com/noeliajz/PS_BACKEND2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center mb-4">
          <Card data-aos="zoom-in" style={{ width: "100%", maxWidth: "18rem" }}>
            <Card.Img variant="top" src={controlStock} />
            <Card.Body className="text-center">
              <Card.Title>Control de stock</Card.Title>
              <Card.Text>
                Permitir a un administrador de un comercio controlar el stock
                de los productos que se venden, a través de una aplicación web.
              </Card.Text>
              <a
                href="https://steady-pie-93363e.netlify.app/"
                className="px-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </a>
              <a
                href="https://github.com/noeliajz/backend_controlDeStock"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardProyectos;
