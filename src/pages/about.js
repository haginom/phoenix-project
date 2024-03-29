import * as React from "react";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../library/helpers";
import Partners from "../components/OurPartners";
import HeroCover from "../components/Polygon";
import CoverImage from "../images/about-header.jpg";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";

export const Query = graphql`
  query AboutPageQuery {
    logos: allSanityClients {
      edges {
        node {
          id
          order
          companyName
          quote
          logo {
            asset {
              url
              gatsbyImageData
            }
          }
        }
      }
    }
    team: allSanityTeam {
      edges {
        node {
          name
          order
          jobTitle
          shortBio
          image {
            asset {
              id
              url
              gatsbyImageData
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
  const LogosSortedByOrder = logoNodes.sort((a, b) => a.order - b.order);
  const TeamSortedByOrder = teamNodes.sort((a, b) => {
    if (a.order === null && b.order === null) {
      return 0;
    } else if (a.order === null) {
      return 1;
    } else if (b.order === null) {
      return -1;
    } else {
      return a.order - b.order;
    }
  });

  return (
    <Layout background="success">
      <HeroCover
        heroClass="hero-top"
        // rectangle={"rectangleSuccessLeft"}
        // adjustPolyWidth={"adjustPolyWidthAbout"}
        chevron={"chevronPrimaryAbout"}
        adjustPolyWidth={"aboutPolywidth"}
        backgroundPositionCoverImage="backgroundPositionImageAbout"
        rowTextClassName="rowTextLeft"
        textColor={"text-dark"}
        lgTxtColSpan={4}
        lgTxtOffset={1}
        lgPolColSpan={4}
        lgPolOffset={0}
        rowTextOffset={0}
        rowTextSpan={12}
        bgImageUrl={CoverImage}
        bgColor="bg-success"
        polygonClass="polygonRight"
        heading="A collective of thinkers from across the globe"
      />
      <div className="padding-large">
        <Container fluid className="bg-success missionStatement">
          <div className="subheading fw-5">Our Mission</div>
          <h3 className="display-4 mb-2r">
            Our job is to help clients make decisions about what to do, or not
            do.
          </h3>
          <p>
            Brand is how every aspect of your business is delivered. A brand is
            a promise to change something in people’s lives, the story through
            which people understand why you exist, and most importantly - a
            navigational system. Brands should exist to help people make better
            choices, more easily, for themselves and for this world. Clear
            beliefs and continuous reinvention are what allow you to do that.
          </p>
        </Container>
      </div>
      <div className="padding-large-no-bottom">
        <div className="w-100 mb-6 p-1">
          <Row className="aboutTable">
            <Col sm={6}>
              <StaticImage alt="" src="../images/about-01.jpg" />
            </Col>
            <Col className="d-flex flex-column justify-content-center" sm={6}>
              <h2 className="subheading w-75">PERSPECTIVE MATTERS</h2>
              <h3 className="display-4 mb-2 ">
                Our team is tiny, but truly global.
              </h3>
              <p className="aboutWidth">
                "Our core team spans seven nationalities and ten languages.
                We’ve also built a network of trusted partners around the world,
                giving us nuance and depth in each region. Whether you want to
                do retail research in the Philippines, positioning in India,
                semiotics in Paris, or get Aussie reactions to brand tone of
                voice, we’ve got you covered wherever you’re growing or planning
                on going."
              </p>
            </Col>
          </Row>
          <Row className="aboutTable">
            <Col
              className="d-flex flex-column justify-content-center"
              xs={{ span: 12, order: "last" }}
              sm={{ span: 6, order: "first" }}
            >
              <h2 className="subheading mt-3">COLLABORATORS AT HEART</h2>
              <h3 className="display-4 mb-4">
                Embedding the strategy is part of our process.
              </h3>
              <p className="aboutWidth">
                You never just get a deck from us - bringing solutions into
                practice is a process, whether that looks like a living model,
                iterative research program, or a new brand book that all teams
                will start to use as a north star. We’ve sat at the pitch table,
                advised on briefs and campaign planning, helped find local
                partners, and occasionally partner with boutique creative
                studios to take on full-service projects.
              </p>
            </Col>
            <Col xs={{ span: 12, order: "first" }} sm={6}>
              <StaticImage alt="" src="../images/about-02.jpg" />
            </Col>
          </Row>
          <Row className="aboutTable">
            <Col sm={6}>
              <StaticImage alt="" src="../images/about-03.jpg" />
            </Col>
            <Col className="d-flex flex-column justify-content-center" sm={6}>
              <h2 className="subheading mt-2">female-led</h2>
              <h3 className="display-4 mb-2">
                Part of the 0.1% of strategy companies run by women.
              </h3>
              <p className="aboutWidth">
                We’re driving the change, and bringing empathy and lateral
                thinking to a traditionally masculine and linear discipline.
              </p>
            </Col>
          </Row>
          <Row className="aboutTable">
            <Col
              className="d-flex flex-column justify-content-center"
              xs={{ span: 12, order: "last" }}
              sm={{ span: 6, order: "first" }}
            >
              <h2 className="subheading mt-3">TRULY FLEXIBLE CULTURE</h2>
              <h3 className="display-4 mb-4">
                Balance, babies and conceptual blending
              </h3>
              <p className="aboutWidth">
                We grew up as our team members families grew! Inherently, our
                ways of working are built around life, not the other way around.
                We also believe the more you do OUTSIDE of “work”, the more
                neurons fire within. So whether it’s bouldering, boat
                reconstructions or building and running a communal daycare on
                your Fridays, bring it on.
              </p>
            </Col>
            <Col xs={{ span: 12, order: "first" }} sm={6}>
              <StaticImage alt="" src="../images/about-04.jpg" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="padding-medium text-white mb-5 mt-n5">
        <div className="padding-team bg-primary">
          <p className="subheading">Our Team</p>
          <h2 className="mb-4 mb-o display-4">Meet the Humans of Phoenix</h2>
          <Row className="ms-1">
            {TeamSortedByOrder.map((teamMember, index) => (
              <Col className="mt-5 gx-5 " key={index} md={4}>
                <Row className="w-97 mb-3">
                  <GatsbyImage
                    alt={`profile of ${teamMember.name}`}
                    image={teamMember.image?.asset?.gatsbyImageData}
                  />
                </Row>
                <Row className="mb-3 mb-o">
                  <p className="display-5 lh-2">{teamMember.name}</p>
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
      <div className="padding-medium mt-5 mb-6 overflow-hidden">
        <Partners
          text={"Our clients are making big strides in personal progress."}
          logos={LogosSortedByOrder}
        />
      </div>
      <Hero
        cta
        heroClass={"hero-mid"}
        btnBorder={"btnBorder"}
        headingClass={"ctaHeading"}
        colSizeMax={9}
        colSizeMin={6}
        colSizeMid={6}
        offsetMax={3}
        offsetMid={3}
        offsetMin={2}
        linkTo="/open-roles"
        bgImg="cta-hero"
        bg="bg-success"
        heading={`Have a challenge?
We love a good one.`}
      />
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>Phoenix About</title>;
