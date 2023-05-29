import React from "react";
import { Container } from "react-bootstrap";
import Quote from "../svgs/Quote.svg";
import Arrow from "../svgs/arrowRight.svg";
import { Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

const Hero = ({
  contactType,
  btnBorder,
  headingClass,
  linkTo,
  light,
  offsetMin,
  offsetMid,
  offsetMax,
  colSizeMax,
  colSizeMin,
  colSizeMid,
  bg,
  heading,
  texts,
  cta,
  notFound,
  coverImage,
  coverImageClassName,
  svgImage,
  svgImageClassName,
  bgImg,
  quote,
  quoteName,
  quoteText,
}) => {
  return (
    <Container
      fluid
      className={`${bg} dark ${bgImg} ${light} overflow-hidden position-relative hero`}
    >
      <Row
        style={{
          marginLeft: 0,
          marginRight: 0,
        }}
        className="w-100 h-100 align-items-center"
      >
        <Col
          xs={{ span: `${colSizeMax}`, offset: `${offsetMin}` }}
          sm={{ span: `${colSizeMax}`, offset: `${offsetMin}` }}
          md={{ span: `${colSizeMid}`, offset: `${offsetMid}` }}
          lg={{ span: `${colSizeMid}`, offset: `${offsetMid}` }}
          xl={{ span: `${colSizeMin}`, offset: `${offsetMax}` }}
          className={`px-sm-0 me-md-4`}
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <div
            className={`d-flex flex-column align-items-stretch justify-content-center ${
              coverImage
                ? `introText`
                : quote
                ? `quoteText`
                : cta
                ? `ctaText`
                : null
            }`}
          >
            {quote ? <Quote className="quote" /> : null}

            <h1
              className={`${headingClass} ${
                notFound
                  ? "display-6"
                  : quote
                  ? ""
                  : contactType
                  ? ""
                  : "display-3"
              } mb-4`}
            >
              {heading}
            </h1>

            {texts ? (
              <div className="w-90 mb-4">
                {texts.map((text, index) => (
                  <p
                    key={index}
                    className={`${notFound ? "display-3 mb-0" : null}`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            ) : null}

            {quoteText ? (
              <>
                <p className="h4 mt-5">{quoteName}</p>
                <p className="h4 clientTitle">
                  <strong>{quoteText}</strong>
                </p>
              </>
            ) : null}

            {cta ? (
              <Link to={linkTo} className={`btn btn-primary ${btnBorder}`}>
                Let's Talk <Arrow />
              </Link>
            ) : null}
          </div>
        </Col>
        {svgImage && <div className={svgImageClassName}> {svgImage} </div>}
      </Row>
      {coverImage && (
        <img className={coverImageClassName} src={coverImage} alt="" />
      )}
    </Container>
  );
};

export default Hero;
