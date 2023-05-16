import React from "react";
import { Container } from "react-bootstrap";

const HeroCover = ({ bg, heading, text, bgImg, light }) => {
  return (
    <Container fluid className={`${bg} ${bgImg} ${light} hero heroPolygon`}>
      <div className="ms-5 ps-5 clip-path-polygon">
        <div className="polygonText">
          <h1 className="display-4 ">{heading}</h1>
          <p>{text}</p>
        </div>
      </div>
    </Container>
  );
};
//   const CoverCWrapper = styled.div`
//     position: relative;
//     height: 100vh;
//     width: 100%;
//   `;

//   const CoverXWrapper = styled.div`
//     position: relative;
//     display: block;
//     width: 100%;
//     height: 100vh;
//     padding: 0;
//     margin: 0;

//     @media (max-width: 960px) {
//       position: static;
//       width: 100vw;
//       height: auto;
//       margin-right: 1rem;
//       margin-left: 1rem;
//     }
//   `;
// };

export default HeroCover;
