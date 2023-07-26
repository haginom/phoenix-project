import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Arrow from "../svgs/arrowRight.svg";
import logoO from "../images/logo-orange-crop.png";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <Container fluid className="footer padding-small">
        <Row>
          <img alt="Phoenix Logo" src={logoO} className={`footerLogo`} />
        </Row>
        <Row>
          <Col className="p-3" lg={3} md={12}>
            <h4 className="colTitle mb-4">Follow us</h4>
            <ul className="footerLinks">
              <li className="mb-2">
                <a href="https://nl.linkedin.com/company/phoenix-brand-strategy">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
          <Col className="p-3" lg={4} md={12}>
            <h4 className="colTitle mb-4">Contact Us</h4>
            <ul className="footerLinks">
              <li className="mb-2">
                {" "}
                <a href="/contact">Hi@phoenixbrandstrategy.com</a>
              </li>
              <li className="mb-2">
                {" "}
                <a href="/open-roles">Jobs@phoenixbrandstrategy.com</a>
              </li>
            </ul>
          </Col>
          <Col lg={1} md={0} />
          <Col className="p-3 " lg={4} md={12}>
            <h4 className="colTitle mb-4">Keep in Touch</h4>
            <a
              href="https://mailchi.mp/2f87f06ed947/email-sign-up"
              className="btn outline-primary btn-primary btn-large mt-4"
            >
              Subscribe to our newsletter <Arrow />
            </a>
          </Col>
        </Row>
      </Container>
      <Row
        style={{
          marginLeft: 0,
          marginRight: 0,
        }}
        className="  
        bg-primary d-flex flex-row-reverse flex-md-row justify-content-between copyright padding-sides"
      >
        <Col xs={7} md={9}>
          <span>Copyright Phoenix Brand Strategy 2022</span>
        </Col>
        <Col xs={5} md={3}>
          <Row>
            <Col>
              <a href="/conditions">
                <span className="pe-3">Terms & Conditions </span>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
