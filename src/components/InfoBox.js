import React from "react";

const InfoBox = ({ heading, text, className }) => {
  return (
    <div className={`infoBoxWrapper ${className}  mt-5`}>
      {heading ? <h3 className="subheading ">{heading}</h3> : null}
      <div className="infoBoxText mt-5">{text}</div>
    </div>
  );
};

export default InfoBox;
