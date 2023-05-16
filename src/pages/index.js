import * as React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
// import X from "../svgs/X.svg";
import InfoBox from "../components/InfoBox";
import AnimatedBanner from "../components/AnimatedBar";
import { Button, Container, Row, Col } from "react-bootstrap";
import Arrow from "../svgs/arrowRight.svg";
import BrandIcon from "../svgs/Brand-Icon.svg";
import ResearchIcon from "../svgs/Research-Icon.svg";
import ExpansionIcon from "../svgs/Expansion-Icon.svg";
import Chevron from "../svgs/chevron.svg";
import logoTexts from "../data/logoTexts";
import { mapEdgesToNodes } from "../library/helpers";
import ProjectPreviewGrid from "../components/ProjectPreviewGrid";
import Layout from "../components/Layout";

export const query = graphql`
  query IndexPageQuery {
    featuredWork: allSanityFeaturedWork {
      edges {
        node {
          id
          title
          description
          previewPoster {
            asset {
              _id
              url
              altText
            }
          }
        }
      }
    }
    logo: file(relativePath: { eq: "logo-black.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
const IndexPage = (props) => {
  const { data, errors } = props;
  const [hoveredLogo, setHoveredLogo] = React.useState(null);

  const handleMouseOver = (logo) => {
    setHoveredLogo(logo);
  };
  const handleMouseLeave = () => {
    setHoveredLogo(null);
  };

  if (errors) {
    return <p>{errors} an error occured </p>;
  }

  const featuredWorkNodes = (data || {}).featuredWork
    ? mapEdgesToNodes(data.featuredWork)
    : [];

  return (
    <Layout data={data}>
      <Hero
        bg="bg-primary"
        heading="We’re a global brand strategy, research & insights consultancy "
        text="Born where brand strategy meets strategic design, based in Amsterdam, and growing brands all over the world by getting deep into culture, behavior and reinventing the point of view. 
        "
        coverImage
      />
      <div className="padding-large">
        <InfoBox text="We work closely with clients to solve big challenges: " />
      </div>
      <AnimatedBanner />
      {featuredWorkNodes && (
        <ProjectPreviewGrid
          title="Featured Work"
          nodes={featuredWorkNodes}
          browseMoreHref="/featuredWork/"
        />
      )}
      <div className="bg-success padding-large">
        <InfoBox
          heading="what we do"
          text="We help find the right problems to solve with a mind in design, and heart in the future."
        />
        <Container className="mt-5">
          <Row className="mb-4">
            <Col className="ps-0" lg={4} md={12} style={{ order: 1 }}>
              <BrandIcon className="mb-4" />
              <h3 className="w-100 mb-4">Brand Building</h3>
              <p className="w-100 mb-4">
                From brand positioning and promise and architecture to key
                narrative and messaging. We often collaborate or cross-over with
                creative partners.
              </p>
            </Col>
            <Col className="ps-0" lg={4} md={12} style={{ order: 4 }}>
              <ResearchIcon className="mb-4" />
              <h3 className="w-100 mb-4 ">Research & Design</h3>
              <p className="w-100 mb-4 ">
                A brand is a promise. We love to connect the dots between the
                brand promise and the product experience, through deep research
                and insight work, and early stage concept design & user testing.
              </p>
            </Col>
            <Col className="ps-0" lg={4} md={12} style={{ order: 7 }}>
              <ExpansionIcon className="mb-4" />
              <h3 className="w-100 mb-4">Expansion & Innovation</h3>

              <p className="w-100 mb-4">
                Through cultural understanding and innovation practices we help
                with challenges around expanding into new markets, new
                verticals, new products, and future-proofing for now and down
                the road.
              </p>
            </Col>
          </Row>
        </Container>
        <Button className="btn-primary">
          See our services
          <Arrow />
        </Button>
      </div>
      <div className="padding-large">
        <InfoBox
          heading="our partners"
          text="We love clients who are brave enough to want to shake thing up."
        />
        <div className="mb-5 mt-5">
          <div className="d-flex justify-content-evenly ">
            {["logoOne", "logoTwo", "logoThree", "logoFour"].map(
              (logo, index) => (
                <div
                  className="logo"
                  key={index}
                  onMouseOver={() => handleMouseOver(logo)}
                  onMouseLeave={handleMouseLeave}
                >
                  logo
                </div>
              )
            )}
          </div>
          <div>
            <div className="d-flex justify-content-center align-items-center logoInfo">
              <Chevron />
              <span className="logoText">
                {hoveredLogo && logoTexts[hoveredLogo]}

                {!hoveredLogo && logoTexts.defaultText}
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-evenly ">
            {["logoFive", "logoSix", "logoSeven", "logoEight"].map(
              (logo, index) => (
                <div
                  tabIndex="0"
                  role="button"
                  aria-label="Show information about what we did for brand"
                  className="logo"
                  key={index}
                  onMouseOver={() => handleMouseOver(logo)}
                  onMouseLeave={handleMouseLeave}
                >
                  logo
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Hero
        quote
        bgImg="quote-hero"
        bg="bg-primary"
        heading="Their work helped us roadmap, but also have fruitful conversations across teams internally."
        quoteName="Nil Onal"
        quoteText="Global Consumer Product Marketing Lead at WhatsApp. 
        "
      />
      <Hero
        cta
        bgImg="cta-hero"
        bg="bg-success"
        heading="Have a challenge? We love a good one."
      />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Phoenix Home</title>;
