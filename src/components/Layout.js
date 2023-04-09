import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ about, children }) => {
  return (
    <>
      <Header about={about} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;