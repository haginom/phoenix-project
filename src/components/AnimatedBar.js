import React from "react";
import Chevron from "../svgs/chevron.svg";
import Marquee from "react-fast-marquee";

const text = ["New market", "Next Product"];

const AnimatedBanner = () => {
  return (
    <div className="marqueeContainer marqueeIndexSpacing">
      <Marquee
        style={{ marginRight: "-1rem", width: "100%" }}
        startPosition={0}
        gradientColor="#ffffff"
        backgroundColor="#ffffff"
        direction={"right"}
        loop={1000}
        speed={60}
      >
        {text.map((item, index) => (
          <div className="marqueeList" key={index}>
            <Chevron />
            <div className="marqueeText">{item}</div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AnimatedBanner;
