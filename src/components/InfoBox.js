import React from "react";

const InfoBox = ({ heading, text, className }) => {
  return (
    <div className={`infoBoxWrapper ${className} `}>
      {heading ? <h3 className="subheading ">{heading}</h3> : null}
      <h2 className="infoBoxText display-4">{text}</h2>
    </div>
  );
};

export default InfoBox;
