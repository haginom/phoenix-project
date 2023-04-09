import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Arrow from "../svgs/arrowRight.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <Container fluid className="footer padding-large">
        <Row>
          <h4 className="footerLogo">Phoenix</h4>
        </Row>
        <Row>
          <Col className="p-3" lg={3} md={12}>
            <h4 className="colTitle">Follow us</h4>
            <ul className="footerLinks">
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">LinkedIn</a>
              </li>
              <li>
                <a href="/">Medium</a>
              </li>
            </ul>
          </Col>
          <Col className="p-3" lg={4} md={12}>
            <h4 className="colTitle">Contact Us</h4>
            <ul className="footerLinks">
              <li>
                <a href="/">Hi@phoenixbrandstrategy.com</a>
              </li>
              <li>
                <a href="/">Jobs@phoenixbrandstrategy.com</a>
              </li>
            </ul>
          </Col>
          <Col lg={1} md={0} />
          <Col className="p-3 " lg={4} md={12}>
            <h4 className="colTitle">Keep in Touch</h4>
            <Button variant="outline-primary">
              Subscribe to our newsletter <Arrow />
            </Button>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="  
        bg-primary d-flex justify-content-between copyright padding-sides"
      >
        <div>
          <span md={10}>Copyright Phoenix Brand Strategy 2022</span>
        </div>

        <div md={1}>
          {" "}
          <span className="px-5">Terms</span>
          <span>Privacy</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
