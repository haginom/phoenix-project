import React from "react";
import { Link } from "gatsby";
import Arrow from "../svgs/arrowRight.svg";
import ProjectPreview from "./ProjectPreview";
import Slider from "react-slick";
import ArrowRight from "../svgs/arrowRight.svg";
import { useRef } from "react";
import { flattenArray } from "../helpers/helpers";

function ProjectPreviewGrid(props) {
  const sliderRef = useRef(null);

  const FlattenedNodes = flattenArray(props.nodes);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    adaptiveHeight: false,
    slidesToShow: 2.2,
    slidesToScroll: 2.2,
    initialSlide: 1,
    centerMode: true,
    centerPadding: "8%",
    className: "slider-container",

    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          slidesToShow: 2.3,
          slidesToScroll: 2.2,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          centerPadding: "0%",
        },
      },
    ],
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="padding-large-no-right mb-5 overflow-hidden">
      <div className="d-flex justify-content-between overflow-hidden">
        {props.title && <h2 className="subheading mb-5">{props.title}</h2>}
        <div className="btn-wrap">
          <button className="arrow-btn prev-btn" onClick={goToPrevSlide}>
            {" "}
            <ArrowRight className="arrow arrowLeft" />
          </button>
          <button className="arrow-btn next-btn" onClick={goToNextSlide}>
            <ArrowRight className="arrow arrowRight" />
          </button>
        </div>
      </div>
      <Slider {...settings} ref={(slider) => (sliderRef.current = slider)}>
        {}
        {FlattenedNodes &&
          FlattenedNodes.map((workItem, index) => {
            return (
              <div key={index} className="mb-3">
                <ProjectPreview {...workItem} />
              </div>
            );
          })}
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
