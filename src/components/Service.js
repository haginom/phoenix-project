import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import services from "../data/services";
import AnimatedBanner from "./AnimatedBanner";

const Service = ({ serviceImage, title, titleDescription, service }) => {
  const descriptions = services[service];
  console.log(serviceImage);
  return (
    <>
      <AnimatedBanner
        text={[`${title}`, ` ${title}`, `${title}`]}
        service={title}
      />
      <Container className="serviceTable mx-auto">
        <Row className="serviceTableTopRow mb-5">
          <Col className="ps-5" md={3}>
            {serviceImage}
          </Col>
          <Col md={6}>
            <h3 className="mb-5">
              <strong>{title}</strong>
            </h3>
            <p className="mb-5">{titleDescription}</p>
          </Col>
        </Row>
        <Row>
          {descriptions.map((service, index) => (
            <Col md={3} key={index}>
              <p className="mb-5">
                <strong>{service["Title"]}</strong>
              </p>
              <p className="mb-5">{service["Description"]}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Service;
