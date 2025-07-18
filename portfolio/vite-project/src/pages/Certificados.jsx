import { Container, Col, Row } from "react-bootstrap";
import certificadoInt from "../assets/introduccion.webp";
import certificado2 from "../assets/diseno.webp";
import certificado3 from "../assets/gestion.webp";
import certificado4 from "../assets/ingles.webp"

const Certificados = () => {
  return (
    <Container fluid className="colorFondo ContainerCertificado py-5">
      <Row>
        <Col xs={12} md={4} lg={4} className="mb-4 text-center" style={{ position: "relative" }}>
          <img
            src={certificadoInt}
            alt="imagen ps"
            className="w-75 img-zoom-hover"
          />
          <a
            href={certificadoInt}
            download="certificado-introduccion.jpg"
            className="estiloBotonCertificado"
            style={{
              display: "inline-block",
              textDecoration: "none",
              color: "black",
              padding: "8px 12px",
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: "4px",
              cursor: "pointer",
              position: "absolute",
              top: "10px",
              left: "10px",
            }}
          >
            Descargar
          </a>
        </Col>
        <Col xs={12} md={4} lg={4} className="mb-4 text-center" style={{ position: "relative" }}>
          <img
            src={certificado2}
            alt="imagen ps"
            className="w-75 img-zoom-hover"
          />
          <a
            href={certificado2}
            download="certificado-diseño.jpg"
            className="estiloBotonCertificado"
            style={{
              display: "inline-block",
              textDecoration: "none",
              color: "black",
              padding: "8px 12px",
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: "4px",
              cursor: "pointer",
              position: "absolute",
              top: "10px",
              left: "10px",
            }}
          >
            Descargar
          </a>
        </Col>
        <Col xs={12} md={4} lg={4} className="mb-4 text-center" style={{ position: "relative" }}>
          <img
            src={certificado3}
            alt="imagen ps"
            className="w-75 img-zoom-hover"
          />
          <a
            href={certificado3}
            download="certificado-gestion.jpg"
            className="estiloBotonCertificado"
            style={{
              display: "inline-block",
              textDecoration: "none",
              color: "black",
              padding: "8px 12px",
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: "4px",
              cursor: "pointer",
              position: "absolute",
              top: "10px",
              left: "10px",
            }}
          >
            Descargar
          </a>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} lg={4} className="mb-4 text-center" style={{ position: "relative" }}>
          <img
            src={certificado4}
            alt="imagen ps"
            className="w-75 img-zoom-hover"
          />
          <a
            href={certificado4}
            download="certificado-introduccion.jpg"
            className="estiloBotonCertificado"
            style={{
              display: "inline-block",
              textDecoration: "none",
              color: "black",
              padding: "8px 12px",
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: "4px",
              cursor: "pointer",
              position: "absolute",
              top: "10px",
              left: "10px",
            }}
          >
            Descargar
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Certificados;
