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
    <div
      className="logo-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="logo" src={logo?.asset?.url} alt={companyName} />
    </div>
  );
};

const LogoContainer = ({ logos }) => {
  const [hoveredQuote, setHoveredQuote] = useState(null);

  const handleLogoHover = (quote) => {
    setHoveredQuote(quote);
  };

  return (
    <div className="mb-4 mt-6">
      <div className="logo-container-row">
        {logos.slice(0, 6).map((logo) => (
          <LogoWithQuote
            key={logo.id}
            companyName={logo.companyName}
            quote={logo.quote}
            logo={logo.logo}
            handleLogoHover={handleLogoHover}
          />
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center logoInfo">
        <Chevron className="quote-chevron" />
        <span className="logoText">
          {hoveredQuote ||
            "Hover over any logo to see what kind of journeys we’ve been on!"}
        </span>
      </div>
      <div className="logo-container-row">
        {logos.slice(6, 12).map((logo) => (
          <LogoWithQuote
            key={logo.id}
            companyName={logo.companyName}
            quote={logo.quote}
            logo={logo.logo}
            handleLogoHover={handleLogoHover}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoContainer;
