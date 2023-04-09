import React from "react";
import { Container, Button } from "react-bootstrap";
import Quote from "../svgs/Quote.svg";
import Arrow from "../svgs/arrowRight.svg";

const Hero = ({ bg, heading, text, cta, coverImage, bgImg, quote }) => {
  return (
    <Container fluid className={`${bg} hero dark position-relative ${bgImg}`}>
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

        <h1 className="display-4 ">{heading}</h1>
        {text ? <p>{text}</p> : null}

        {cta ? (
          <Button>
            Let's Talk <Arrow />
          </Button>
        ) : null}
      </div>
      {coverImage ? <div> {coverImage} </div> : null}
    </Container>
  );
};

export default Hero;
