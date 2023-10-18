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
      <Container fluid className="serviceTable">
        <Row className="service-table-row">
          <Col className="" md={3}>
            {serviceImage}
          </Col>
          <Col md={5}>
            <h3 className="display-4 mb-4">{title}</h3>
            <p className="service-title py-3 serviceTitleDescription">
              {titleDescription}
            </p>
          </Col>
        </Row>
        <Row className="gx-0 serviceTableTopRow service-table-row">
          {subServices.map((subService, index) => (
            <Col className="subservice " md={3} key={index}>
              <p className="subservice-title two-lines-height">
                <strong>{subService.title}</strong>
              </p>
              <p className="subservice-description ">
                {subService.description}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Service;
