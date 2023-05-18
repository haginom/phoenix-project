import React from "react";
import Marquee from "react-fast-marquee";

const AnimatedBanner = ({ text, miniIcon }) => {
  return (
    <div className="marqueeContainer mt-5">
      <Marquee
        style={{ width: "100%" }}
        startPosition={0}
        gradientColor="#ffffff"
        backgroundColor="#ffffff"
        loop={100}
      >
        {text.map((item, index) => (
          <div className="marqueeList" key={index}>
            <img
              src={miniIcon.asset?.url}
              alt="icon for subservice"
              className="ms-5 me-5"
            />

            <div className="marqueeServiceText">{item}</div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AnimatedBanner;
