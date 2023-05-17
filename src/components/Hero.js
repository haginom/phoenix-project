import React from "react";
import { Container, Button } from "react-bootstrap";
import Quote from "../svgs/Quote.svg";
import Arrow from "../svgs/arrowRight.svg";
import { Row, Col } from "react-bootstrap";
import X from "../images/phoeni-X.png";

const Hero = ({
  headingClass,
  offset,
  size,
  bg,
  heading,
  texts,
  cta,
  coverImage,
  bgImg,
  quote,
  quoteName,
  quoteText,
}) => {
  return (
    <Container fluid className={`${bg} hero dark ${bgImg} position-relative `}>
      <Row className="w-100 h-100 align-items-center no-gutters">
        <Col md={`${size}`} className={`offset-md-${offset} px-0`}>
          <div
            className={`text ${
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

            <h1 className={`${headingClass} display-3`}>{heading}</h1>

            {texts ? (
              <div className="mb-5">
                {texts.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            ) : null}

            {quoteText ? (
              <>
                <p className="h4">{quoteName}</p>
                <p className="h4"> {quoteText}</p>
              </>
            ) : null}

            {cta ? (
              <Button>
                Let's Talk <Arrow />
              </Button>
            ) : null}
          </div>
        </Col>
        {coverImage ? <img className="x-bkg" src={X} /> : null}
      </Row>
    </Container>
  );
};

export default Hero;
