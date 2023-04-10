import React from "react";
import { Link } from "gatsby";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import Arrow from "../svgs/arrowRight.svg";
import ProjectPreview from "./ProjectPreview";

function ProjectPreviewGrid(props) {
  return (
    <Container className="mb-5">
      {props.title && <h2 className="subheading">{props.title}</h2>}
      <Carousel interval={null}>
        {props.nodes &&
          props.nodes.map((node, index) => {
            if (index % 2 === 0) {
              return (
                <Carousel.Item key={node.id}>
                  <Row>
                    <Col md={6}>
                      <ProjectPreview {...node} />
                    </Col>
                    {props.nodes[index + 1] && (
                      <Col md={6}>
                        <ProjectPreview {...props.nodes[index + 1]} />
                      </Col>
                    )}
                  </Row>
                </Carousel.Item>
              );
            } else return null;
          })}
      </Carousel>

      {props.browseMoreHref && (
        <div>
          <Link
            className="btn link-button btn-primary"
            to={props.browseMoreHref}
          >
            See more work{"  "}
            <Arrow />
          </Link>
        </div>
      )}
    </Container>
  );
}

export default ProjectPreviewGrid;
