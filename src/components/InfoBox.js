import React from "react";

const InfoBox = ({ heading, text }) => {
  return (
    <div className="infoBoxWrapper">
      {heading ? <h3 className="subheading">{heading}</h3> : null}
      <div className="infoBoxText display-5">{text}</div>
    </div>
  );
};

export default InfoBox;
