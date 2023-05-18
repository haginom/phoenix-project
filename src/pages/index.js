import * as React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import InfoBox from "../components/InfoBox";
import AnimatedBanner from "../components/AnimatedBar";
import { Container, Row, Col } from "react-bootstrap";
import Arrow from "../svgs/arrowRight.svg";
import BrandIcon from "../svgs/Brand-Icon.svg";
import ResearchIcon from "../svgs/Research-Icon.svg";
import ExpansionIcon from "../svgs/Expansion-Icon.svg";
import { mapEdgesToNodes } from "../library/helpers";
import ProjectPreviewGrid from "../components/ProjectPreviewSlick";
import Layout from "../components/Layout";
import Partners from "../components/OurPartners";
import { Link } from "gatsby";

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

    logo: file(relativePath: { eq: "logo-black.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return <p>{errors} an error occured </p>;
  }

  const featuredWorkNodes = (data || {}).featuredWork
    ? mapEdgesToNodes(data.featuredWork)
    : [];
  const logoNodes = (data || {}).logos ? mapEdgesToNodes(data.logos) : [];

  return (
    <Layout data={data}>
      <Hero
        offset={2}
        size={6}
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
        <Container fluid className="mt-6">
          <Row className="my-5">
            <Col className="ps-0" lg={4} md={12} style={{ order: 1 }}>
              <Row className="text-align-left">
                <BrandIcon
                  style={{ width: "105px", height: "105px" }}
                  className="mb-4"
                />
              </Row>
              <Row>
                <h3 className="w-90 mb-2r display-2">Brand Building</h3>
              </Row>
              <Row>
                <p className="w-100 mb-4">
                  From brand positioning and promise and architecture to key
                  narrative and messaging. We often collaborate or cross-over
                  with creative partners.
                </p>
              </Row>
            </Col>
            <Col className="ps-0" lg={4} md={12} style={{ order: 4 }}>
              <Row>
                <ResearchIcon
                  style={{ width: "105px", height: "105px" }}
                  className="mb-4"
                />
              </Row>
              <Row>
                <h3 className="w-90 mb-2r display-2">Research & Design</h3>
              </Row>
              <Row>
                <p className="w-100 mb-4 ">
                  A brand is a promise. We love to connect the dots between the
                  brand promise and the product experience, through deep
                  research and insight work, and early stage concept design &
                  user testing.
                </p>
              </Row>
            </Col>
            <Col className="ps-0" lg={4} md={12} style={{ order: 7 }}>
              <Row>
                <ExpansionIcon
                  style={{ width: "105px", height: "105px" }}
                  className="mb-4"
                />
              </Row>
              <Row>
                <h3 className="w-90 mb-2r display-2">Expansion & Innovation</h3>
              </Row>
              <Row>
                <p className="w-90 mb-5">
                  Through cultural understanding and innovation practices we
                  help with challenges around expanding into new markets, new
                  verticals, new products, and future-proofing for now and down
                  the road.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
        <Link to="services" className="mb-5 btn btn-primary">
          See our services
          <Arrow />
        </Link>
      </div>
      <div className="padding-large">
        <Partners
          logos={logoNodes}
          text="We love clients who are brave enough to want to shake thing up."
        />
      </div>
      <Hero
        offset={1}
        quote
        size={7}
        bgImg="quote-hero"
        bg="bg-primary"
        heading="Their work helped us roadmap, but also have fruitful conversations across teams internally."
        quoteName="Nil Onal"
        quoteText="Global Consumer Product Marketing Lead at WhatsApp. 
        "
      />
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

export default IndexPage;

export const Head = () => <title>Phoenix Home</title>;
