import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Arrow from "../svgs/arrowRight.svg";
import logoO from "../images/logo-orange-crop.png";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <Container fluid className="footer padding-small">
        <Row>
          <img src={logoO} className={`footerLogo`} />
        </Row>
        <Row>
          <Col className="p-3" lg={3} md={12}>
            <h4 className="colTitle mb-4">Follow us</h4>
            <ul className="footerLinks">
              <li className="mb-2">
                <a href="/">Instagram</a>
              </li>
              <li className="mb-2">
                <a href="/">LinkedIn</a>
              </li>
              <li className="mb-2">
                <a href="/">Medium</a>
              </li>
            </ul>
          </Col>
          <Col className="p-3" lg={4} md={12}>
            <h4 className="colTitle mb-4">Contact Us</h4>
            <ul className="footerLinks">
              <li className="mb-2">
                {" "}
                <a href="/">Hi@phoenixbrandstrategy.com</a>
              </li>
              <li className="mb-2">
                {" "}
                <a href="/">Jobs@phoenixbrandstrategy.com</a>
              </li>
            </ul>
          </Col>
          <Col lg={1} md={0} />
          <Col className="p-3 " lg={4} md={12}>
            <h4 className="colTitle mb-4">Keep in Touch</h4>
            <Button variant="outline-primary btn-large mt-4">
              Subscribe to our newsletter <Arrow />
            </Button>
          </Col>
        </Row>
      </Container>
      <Row
        className="  
        bg-primary d-flex flex-row-reverse flex-md-row justify-content-between copyright padding-sides"
      >
        <Col xs={8}>
          <span>Copyright Phoenix Brand Strategy 2022</span>
        </Col>

        <Col xs={4}>
          {" "}
          <span className="pe-3">Terms</span>
          <span>Privacy</span>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
