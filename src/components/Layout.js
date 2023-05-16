import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ data, children }) => {
  return (
    <>
      <Header data={data} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
