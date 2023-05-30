import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Chevron from "../svgs/chevron.svg";

const LogoWithQuote = ({ companyName, quote, logo, handleLogoHover }) => {
  const handleMouseEnter = () => {
    handleLogoHover(quote);
  };

  const handleMouseLeave = () => {
    handleLogoHover(null);
  };

  return (
    <Col
      md={3}
      className="logo-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="logo p-4" src={logo} alt={companyName} />
    </Col>
  );
};

const LogoContainer = ({ logos }) => {
  const [hoveredQuote, setHoveredQuote] = useState(null);

  const handleLogoHover = (quote) => {
    setHoveredQuote(quote);
  };

  return (
    <div className="mb-5 mt-6">
      <Row className="gx-md-3">
        {logos.slice(0, 4).map((logo) => (
          <LogoWithQuote
            key={logo.id}
            companyName={logo.companyName}
            quote={logo.quote}
            logo={logo.logo}
            handleLogoHover={handleLogoHover}
          />
        ))}
      </Row>
      <div className="d-flex justify-content-center align-items-center logoInfo">
        <Chevron className="quote-chevron" />
        <span className="logoText">
          {hoveredQuote || "Hover over one of our partner logos!"}
        </span>
      </div>
      <Row>
        {logos.slice(4, 8).map((logo) => (
          <LogoWithQuote
            key={logo.id}
            companyName={logo.companyName}
            quote={logo.quote}
            logo={logo.logo}
            handleLogoHover={handleLogoHover}
          />
        ))}
      </Row>
    </div>
  );
};

export default LogoContainer;
