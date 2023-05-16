import React from "react";
import Marquee from "react-fast-marquee";
import BrandIcon from "../svgs/Brand-Icon.svg";
import ResearchIcon from "../svgs/Research-Icon.svg";
import ExpansionIcon from "../svgs/Expansion-Icon.svg";

const AnimatedBanner = ({ text, service }) => {
  return (
    <div className="marqueeContainer mb-5">
      <Marquee
        style={{ width: "100%" }}
        startPosition={0}
        gradientColor="#ffffff"
        backgroundColor="#ffffff"
        loop={100}
      >
        {text.map((item, index) => (
          <div className="marqueeList" key={index}>
            {service === "Brand Building" && (
              <BrandIcon className="ms-5 me-5" />
            )}
            {service === "Research & Design" && (
              <ResearchIcon className="ms-5 me-5" />
            )}
            {service === "Expansion & Innovation" && (
              <ExpansionIcon className="ms-5 me-5" />
            )}
            <div className="marqueeServiceText">{item}</div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AnimatedBanner;
