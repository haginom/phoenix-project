import * as React from "react";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
import HeroCover from "../components/Hero-Contact";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <HeroCover
        // contactCoverImage={<About className="about-hero" />}
        bg="bg-primary"
        // heading="A collective of thinkers from across the globe"
      />
      <div className="padding-medium">
        <Container fluid className="bg-success missionStatement">
          <div className="subheading mt-5 fw-5">Our Mission</div>
          <h3 className="display-2 mb-2r">
            Our job is to help clients make decisions about what to do, or not
            do.
          </h3>
          <p className="mb-2r">
            Brand is how every aspect of your business is delivered. A brand is
            a promise to change something in people’s lives, the story through
            which people understand why you exist, and most importantly - a
            navigational system. Brands should exist to help people make better
            choices, more easily, for themselves and for this world. Clear
            beliefs and continuous reinvention are what allow you to do that.
          </p>
        </Container>
        <Container className="mb-6">
          <Row className="mt-5">
            <Col sm={6}></Col>
            <Col className="d-flex flex-column justify-content-center" sm={6}>
              <div className="subheading">DIVERSITY OF PERSPECTIVE</div>
              <h3>Our team is tiny but truly global.</h3>
              <p>
                Our core team spans seven nationalities and ten languages. And
                we’ve also built a network of trusted partners around the world,
                giving us nuance and depth in each region. Whether you want to
                do retail research in the Philippines, positioning in India,
                semiotics in Paris, or get Aussie reactions to brand tone of
                voice, we’ve got you covered. Wherever you’re growing or
                planning on going we’re there.
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="d-flex flex-column justify-content-center" sm={6}>
              <div className="subheading">PLAYS WELL WITH OTHERS</div>
              <h3>We’re collaborators at heart.</h3>
              <p>
                We often work closely with other brand partners or client
                agencies to bring strategy to life when it comes to the
                communication, character and advertising side of things. We’ve
                sat at the pitch table and helped find local partners. And we
                occasionally partner with boutique creative studios to take on
                full-service projects.
              </p>
            </Col>
            <Col sm={6}></Col>
          </Row>
          <Row className="mt-5">
            <Col sm={6}>
              <GatsbyImage
                image={data.aboutFour.childImageSharp.gatsbyImageData}
                alt=""
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center" sm={6}>
              <div className="subheading">female-led</div>
              <h3>Part of the few.</h3>
              <p>
                We’re part of the 0.1% of strategy shops founded and run by
                women. We think that’s nuts, but we’re driving the change and
                bringing empathy and lateral thinking to a traditionally
                masculine and linear discipline.
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="d-flex flex-column justify-content-center" sm={6}>
              <div className="subheading">BUILT AROUND BABIES</div>
              <h3>Flexible culture that values balance.</h3>
              <p>
                You did read that right. We are a bunch of young parents and new
                families, so we know how to create a way of working that is
                built around life, not the other way around. We also believe the
                more you do OUTSIDE of “work”, the more neurons fire within. So
                whether it’s bouldering or running a communal daycare, hobbyists
                welcome!
              </p>
            </Col>
            <Col sm={6}></Col>
          </Row>
        </Container>
      </div>
      <Hero
        cta
        size={6}
        offset={2}
        bgImg="cta-hero"
        bg="bg-success"
        heading="Have a challenge? We love a good one."
      />
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    aboutOne: file(relativePath: { eq: "about-1.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    aboutFour: file(relativePath: { eq: "about-4.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
export default AboutPage;

export const Head = () => <title>Phoenix About</title>;
