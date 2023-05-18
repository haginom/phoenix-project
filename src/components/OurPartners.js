import * as React from "react";
import InfoBox from "../components/InfoBox";
import LogoContainer from "./Logo";

const Partners = ({ text, logos }) => {
  return (
    <>
      <InfoBox heading="our partners" text={text} />
      <LogoContainer logos={logos} />
    </>
  );
};

export default Partners;
