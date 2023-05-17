import * as React from "react";
import Layout from "../components/Layout";
import HeroCover from "../components/Hero-Contact";
import Contact from "../svgs/Contact.svg";

const ContactPage = () => {
  return (
    <Layout>
      <HeroCover
        notFound
        size={6}
        offset={2}
        contactCoverImage={<Contact className="contact-hero" />}
        bg="bg-primary"
        heading="404"
        text="page not found"
      />
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Page</title>;
