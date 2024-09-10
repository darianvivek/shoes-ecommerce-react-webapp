import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer" style={{ width: "100%" }}>
      <Container style={{color:"white",backgroundColor:"black",width:"100%",marginTop:"auto"}}>
        <Row>
          <Col md={5}>
            <h5>About Us</h5>
            <p>
              Welcome to DV, your one-stop shop for all your shoe needs. We're dedicated to providing you with the best products and services.
            </p>
          </Col>
          <Col md={5}>
            <h5>Contact Us</h5>
            <p>
              Email: <a href="mailto:info@dv.com">info@dv.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890">+1234567890</a>
            </p>
            <p>
              Address: 123 Main St, Anytown, USA
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p>&copy; 2023 DV. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;