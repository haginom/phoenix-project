import "@popperjs/core/dist/umd/popper.min";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min";
import "./src/styles/custom.scss";
import "./src/styles/layout.scss";
import React from "react";
import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
