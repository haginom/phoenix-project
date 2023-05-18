import * as React from "react";
import HeroCover from "../components/Hero-Contact";
import Contact from "../svgs/Contact.svg";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <HeroCover
        offset={2}
        size={4}
        contactCoverImage={<Contact className="contact-hero" />}
        bg="bg-primary"
        heading="Say hi / hoi / hola / hello / درود / zdravei / ciao / こんにちは!"
      />
      <Container fluid className="padding-xl">
        <p className="subheading">PARTNERS</p>
        <Row className="w-100 align-items-center ">
          <Col sm={12} lg={6}>
            <h2 className="mb-5 mt-2 w-90">
              Have an interesting problem to solve?
            </h2>
            <p className="w-90">
              If you’re interested in working together, let’s have a chat! We
              work with clients from start-ups pre-seed round who have a strong
              vision, to scale-ups cracking new markets one by one, to some of
              the biggest consumer brands in the world.
            </p>
          </Col>
          <Col>
            <div className="separator"></div>
          </Col>
          <Col className="mb-3 contactCol" sm={12} lg={5}>
            <p className="mb-0">Email us:</p>
            <p>hi@phoenixbrandstrategy.com</p>
            <p className="mb-0">Call us:</p>
            <p>+31 (0)6 188 978 75</p>
            <p className="mb-0">Drop in:</p>
            <p className="mb-0">Keizersgracht 560-562</p>
            <p>1017 EM Amsterdam, NL</p>
          </Col>
        </Row>
      </Container>
      <Hero
        offset={2}
        size={6}
        headingClass="w-90"
        cta
        bgImg="cta-hero"
        bg="bg-success"
        heading="Think you might fit in here?"
        texts={[
          "The Phoenix team is growing. We’re looking for people who want to get their hands dirty, do work that drives decisions, and makes a difference in our clients’ businesses.",
          "Any of these roles sound like a great fit for you? Get in touch.",
        ]}
      />
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Page</title>;
