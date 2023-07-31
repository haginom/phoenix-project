import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedBanner from "./AnimatedBanner";

const Service = ({
  serviceImage,
  title,
  titleDescription,
  subServices,
  miniIcon,
}) => {
  return (
    <>
      <AnimatedBanner
        text={[`${title}`, ` ${title}`, `${title}`]}
        miniIcon={miniIcon}
      />
      <Container
        fluid
        className="padding-large-sides pt-0 pb-2 serviceTable w-100 mx-auto overflow-hidden mw-xl"
      >
        <Row className="serviceTableTopRow my-5 mb-2md me-0">
          <Col className="ms-2 mb-4" md={3}>
            {serviceImage}
          </Col>
          <Col md={5}>
            <h3 className="display-4 mb-4">{title}</h3>
            <p className="mb-5 mb-2md serviceTitleDescription">
              {titleDescription}
            </p>
          </Col>
        </Row>
        <Row>
          {subServices.map((subService, index) => (
            <Col className="px-3" md={3} key={index}>
              <p className="mb-5 mb-2md two-lines-height">
                <strong>{subService.title}</strong>
              </p>
              <p className="mb-5 mb-2md">{subService.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Service;
