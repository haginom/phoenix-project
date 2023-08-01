import React, { useState } from "react";
import Chevron from "../svgs/chevron.svg";
import { GatsbyImage } from "gatsby-plugin-image";

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
      <div className="logo">
        <GatsbyImage
          objectFit="contain"
          style={{ width: "auto", height: "100%", maxHeight: "75px" }}
          image={logo?.asset.gatsbyImageData}
          alt={companyName}
        />
      </div>
    </div>
  );
};

const LogoContainer = ({ logos }) => {
  const [hoveredQuote, setHoveredQuote] = useState(null);

  const handleLogoHover = (quote) => {
    setHoveredQuote(quote);
  };

  const numberLogosDisplayed = 8;

  return (
    <div className="mt-6 mb-2">
      <div className="logo-container-row mt-4">
        {logos.slice(0, Math.ceil(numberLogosDisplayed / 2)).map((logo) => {
          return (
            <LogoWithQuote
              key={logo.id}
              companyName={logo.companyName}
              quote={logo.quote}
              logo={logo.logo}
              handleLogoHover={handleLogoHover}
            />
          );
        })}
      </div>
      <div className="d-flex justify-content-center align-items-center logoInfo">
        <Chevron className="quote-chevron" />
        <span className="logoText">
          {hoveredQuote ||
            "Hover over any logo to see what kind of journeys we’ve been on!"}
        </span>
      </div>
      <div className="logo-container-row">
        {logos
          .slice(Math.ceil(numberLogosDisplayed / 2), numberLogosDisplayed)
          .map((logo) => (
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
