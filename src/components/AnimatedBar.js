import React from "react";
// import Chevron from "../images/chevron.svg";
import Marquee from "react-fast-marquee";

const text = ["New market", "Next Product"];

const AnimatedBanner = () => {
  return (
    <div className="marqueeContainer">
      <Marquee
        style={{ width: "100%" }}
        startPosition={0}
        gradientColor="#ffffff"
        backgroundColor="#ffffff"
        loop={1000}
      >
        {text.map((item, index) => (
          <div className="marqueeList" key={index}>
            {/* <Chevron /> */}
            <div className="marqueeText">{item}</div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AnimatedBanner;
