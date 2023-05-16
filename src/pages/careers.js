import * as React from "react";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import HeroCover from "../components/Hero-Contact";
import Contact from "../svgs/Contact.svg";

const CareersPage = () => {
  return (
    <HeroCover
      contactCoverImage={<Contact className="contact-hero" />}
      bg="bg-primary"
      heading="Open roles"
    />
  );
};

export default CareersPage;

export const Head = () => <title>Contact Page</title>;
