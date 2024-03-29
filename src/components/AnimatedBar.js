import React from "react";
import Chevron from "../svgs/chevron.svg";
import Marquee from "react-fast-marquee";

const text = [
  "New market",
  "Next Product",
  "New market",
  "Next Product",
  "New market",
  "Next Product",
];

const AnimatedBanner = () => {
  return (
    <div className="marqueeContainer marqueeIndexSpacing">
      <Marquee
        startPosition={0}
        gradientColor="#ffffff"
        backgroundColor="#ffffff"
        direction={"right"}
        loop={1000}
        speed={60}
      >
        {text.map((item, index) => (
          <div className="marqueeList" key={index}>
            <Chevron style={{ marginRight: "1.5rem" }} />
            <div className="marqueeText">{item}</div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AnimatedBanner;
