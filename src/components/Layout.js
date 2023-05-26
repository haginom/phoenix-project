import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ background, data, children }) => {
  return (
    <>
      <Header background={background} data={data} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
