import React from "react";

const InfoBox = ({ heading, text, className }) => {
  return (
    <div className={`infoBoxWrapper ${className} `}>
      {heading ? <h3 className="subheading ">{heading}</h3> : null}
      <div className="infoBoxText">{text}</div>
    </div>
  );
};

export default InfoBox;
