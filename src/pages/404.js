import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Contact from "../svgs/Contact.svg";
import X from "../images/phoeni-X.png";

const ContactPage = () => {
  return (
    <Layout>
      <Hero
        heroClass="hero-top"
        notFound
        offsetMax={1}
        offsetMid={1}
        offsetMin={1}
        colSizeMax={10}
        colSizeMin={6}
        colSizeMid={5}
        svgImage={<Contact className="contact-hero" />}
        bg="bg-primary"
        heading="404"
        texts={["page not found"]}
        coverImage={X}
        coverImageClassName="x-Mobile"
      />
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Page</title>;
