import React from "react";
import { Link } from "gatsby";
import { Row, Col } from "react-bootstrap";
import Arrow from "../svgs/arrowRight.svg";
import ProjectPreview from "./ProjectPreview";
import Slider from "react-slick";

function ProjectPreviewGrid(props) {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    adaptiveHeight: true,

    slidesToShow: 2.3,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
    centerPadding: "2%", // Adjust the padding value to determine how much of the third slide should be visible
    className: "slider-container",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="padding-large-no-right mb-5 ">
      {props.title && <h2 className="subheading mb-5">{props.title}</h2>}
      <Slider {...settings}>
        {props.nodes &&
          props.nodes.map((node) => (
            <div key={node.id} className="mb-3">
              <ProjectPreview {...node} />
            </div>
          ))}
      </Slider>

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
    </div>
  );
}

export default ProjectPreviewGrid;
