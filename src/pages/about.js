import * as React from "react";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { mapEdgesToNodes } from "../library/helpers";
import Partners from "../components/OurPartners";

export const Query = graphql`
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
    logos: allSanityQuote {
      edges {
        node {
          id
          companyName
          quote
          logo {
            asset {
              url
            }
          }
        }
      }
    }

    team: allSanityTeam {
      edges {
        node {
          name
          jobTitle
          shortBio
          image {
            asset {
              id
              url
            }
            crop {
              top
              bottom
              left
              right
            }
            hotspot {
              x
              y
              height
              width
            }
          }
        }
      }
    }
  }
`;

const AboutPage = ({ data }) => {
  const teamNodes = (data || {}).team ? mapEdgesToNodes(data.team) : [];
  const logoNodes = (data || {}).logos ? mapEdgesToNodes(data.logos) : [];

  return (
    <Layout>
      <Hero bg="bg-primary" />
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
      </div>
      <div className="padding-medium">
        <div className="w-100 mb-6 p-1">
          <Row className="aboutTable">
            <Col sm={6}>
              <img alt="" src="https://picsum.photos/580" />
            </Col>
            <Col className="d-flex flex-column justify-content-center" sm={6}>
              <h2 className="subheading mt-3">DIVERSITY OF PERSPECTIVE</h2>
              <h3 className="display-2 mb-4 ">
                Our team is tiny but truly global.
              </h3>
              <p className="aboutWidth">
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
          <Row className="aboutTable">
            <Col
              className="d-flex flex-column justify-content-center"
              xs={{ span: 12, order: "last" }}
              sm={{ span: 6, order: "first" }}
            >
              <h2 className="subheading mt-3">PLAYS WELL WITH OTHERS</h2>
              <h3 className="display-2 mb-4">We’re collaborators at heart.</h3>
              <p className="aboutWidth">
                We often work closely with other brand partners or client
                agencies to bring strategy to life when it comes to the
                communication, character and advertising side of things. We’ve
                sat at the pitch table and helped find local partners. And we
                occasionally partner with boutique creative studios to take on
                full-service projects.
              </p>
            </Col>
            <Col xs={{ span: 12, order: "first" }} sm={6}>
              {" "}
              <img alt="" src="https://picsum.photos/580" />
            </Col>
          </Row>
          <Row className="aboutTable">
            <Col sm={6}>
              <GatsbyImage
                image={data.aboutFour.childImageSharp.gatsbyImageData}
                alt=""
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center" sm={6}>
              <h2 className="subheading mt-3">female-led</h2>
              <h3 className="display-2 mb-4">Part of the few.</h3>
              <p className="aboutWidth">
                We’re part of the 0.1% of strategy shops founded and run by
                women. We think that’s nuts, but we’re driving the change and
                bringing empathy and lateral thinking to a traditionally
                masculine and linear discipline.
              </p>
            </Col>
          </Row>
          <Row className="aboutTable">
            <Col
              className="d-flex flex-column justify-content-center"
              xs={{ span: 12, order: "last" }}
              sm={{ span: 6, order: "first" }}
            >
              <h2 className="subheading mt-3">BUILT AROUND BABIES</h2>
              <h3 className="display-2 mb-4">
                Flexible culture that values balance.
              </h3>
              <p className="aboutWidth">
                You did read that right. We are a bunch of young parents and new
                families, so we know how to create a way of working that is
                built around life, not the other way around. We also believe the
                more you do OUTSIDE of “work”, the more neurons fire within. So
                whether it’s bouldering or running a communal daycare, hobbyists
                welcome!
              </p>
            </Col>
            <Col xs={{ span: 12, order: "first" }} sm={6}>
              {" "}
              <img alt="" src="https://picsum.photos/580" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="padding-medium text-white mb-5 mt-n5">
        <div className="padding-team bg-primary">
          <p className="subheading">Our Team</p>
          <h2 className="mb-4 display-2">Meet the Humans of Phoenix</h2>
          <Row>
            {teamNodes.map((teamMember, index) => (
              <Col className="mt-5" key={index} md={4}>
                <Row className="w-90 mb-2">
                  <img
                    alt={`profile of ${teamMember.name}`}
                    src="https://picsum.photos/180"
                  />
                </Row>
                <Row className="mb-3 mb-o">
                  <p className="h2 lh-2">{teamMember.name}</p>
                </Row>
                <Row className="mb-3 mb-o w-90">
                  <p>{teamMember.jobTitle}</p>
                </Row>
                <Row className="w-97">
                  <p>{teamMember.shortBio}</p>
                </Row>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="padding-medium mt-n5 mb-5">
        <Partners
          text={
            "Our clients have big names in the med tech and wellness space."
          }
          logos={logoNodes}
        />
      </div>
      <Hero
        cta
        btnBorder={"btnBorder"}
        headingClass={"ctaHeading"}
        colSizeMax={9}
        colSizeMin={6}
        colSizeMid={6}
        offsetMax={3}
        offsetMid={3}
        offsetMin={2}
        linkTo="open-roles"
        bgImg="cta-hero"
        bg="bg-success"
        heading="Have a challenge? We love a good one."
      />
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>Phoenix About</title>;
