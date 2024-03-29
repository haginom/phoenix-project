import * as React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import InfoBox from "../components/InfoBox";
import AnimatedBanner from "../components/AnimatedBar";
import { Row, Col } from "react-bootstrap";
import Arrow from "../svgs/arrowRight.svg";
import { mapEdgesToNodes } from "../library/helpers";
import ProjectPreviewGrid from "../components/ProjectPreviewSlick";
import Layout from "../components/Layout";
import Partners from "../components/OurPartners";
import { Link } from "gatsby";
import X from "../images/phoeni-X.png";
import BrandVenn from "../svgs/Brand-Venn.svg";
import BrandVennMobile from "../svgs/Venn-Mobile.svg";

export const query = graphql`
  query IndexPageQuery {
    featuredWork: allSanityFeaturedWork {
      edges {
        node {
          id
          _createdAt
          title
          description
          previewPoster {
            asset {
              gatsbyImageData
              altText
              publicUrl
              url
              _id
            }
          }
          logo {
            asset {
              gatsbyImageData
              publicUrl
              url
              _id
            }
          }
        }
      }
    }
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

    services: allSanityServices {
      edges {
        node {
          name
          order
          icon {
            asset {
              publicUrl
              url
            }
          }
          description
          id
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

  const serviceNodes = (data || {}).services
    ? mapEdgesToNodes(data.services)
    : [];

  const ServicesSortedByOrder = serviceNodes.sort((a, b) => a.order - b.order);
  if (errors) {
    return <p>{errors} an error occured </p>;
  }

  const featuredWorkNodes = (data || {}).featuredWork
    ? mapEdgesToNodes(data.featuredWork)
    : [];

  const SortedWorkByDate = featuredWorkNodes.sort(
    (a, b) => new Date(a._createdAt) - new Date(b._createdAt)
  );

  const logoNodes = (data || {}).logos ? mapEdgesToNodes(data.logos) : [];
  const LogosSortedByOrder = logoNodes.sort((a, b) => a.order - b.order);
  return (
    <Layout data={data}>
      <Hero
        heroClass="hero-top"
        colWidthAdjustIndex={"colWidthAdjustIndex"}
        offsetMax={1}
        offsetMid={1}
        offsetMin={1}
        colSizeMax={10}
        colSizeMin={5}
        colSizeMid={6}
        bg="bg-primary"
        heading="We’re a global brand strategy, research & insights consultancy "
        texts={[
          "Born where brand strategy meets strategic design, based in Amsterdam, and growing brands all over the world by getting deep into culture, behavior and reinventing the point of view.",
        ]}
        coverImage={X}
        coverImageClassName="x-bkg"
      />
      <div className="padding-large-sides ">
        <InfoBox text="We work closely with clients to solve big brand and business challenges: " />
      </div>
      <AnimatedBanner />
      {SortedWorkByDate && (
        <ProjectPreviewGrid
          title="Featured Work"
          infinite
          nodes={SortedWorkByDate}
          browseMoreHref="/work/"
        />
      )}
      <div className="padding-large bg-primary">
        <InfoBox
          className="text-light"
          text="Phoenix is where brand strategy meets strategic design."
        />
        <div className="vennGraphic-container">
          <BrandVenn className="vennGraphic" />
        </div>
        <BrandVennMobile className="vennGraphicMobile" />
      </div>

      <div className="bg-success padding-large overflow-hidden">
        <div className="mw-xl">
          <InfoBox
          className="mt-3"
            heading="what we do"
            text="We help find the right problems to solve with a mind in design, and heart in the future."
          />
          <div className="my-4 overflow-hidden">
            <Row className=" gx-5 mt-3">
              {ServicesSortedByOrder.map((service, index) => (
                <Col
                  className="my-3"
                  key={index}
                  lg={4}
                  md={12}
                  style={{
                    order:
                      service.order === 1 ? 1 : service.order === 2 ? 4 : 7,
                  }}
                >
                  <Row className="text-align-left">
                    <img
                      alt=""
                      src={service.icon.asset.url}
                      style={{ width: "110px" }}
                      className="mb-4"
                    />
                  </Row>
                  <Row>
                    <h3 className="w-90-md mb-4 display-4">
                      {service.name.split(" ").length === 2 ? (
                        <>
                          {service.name.split(" ")[0]}
                          <br />
                          {service.name.split(" ")[1]}
                        </>
                      ) : service.name.split(" ").length === 3 ? (
                        <>
                          {service.name.split(" ").slice(0, 2).join(" ")}
                          <br />
                          {service.name.split(" ")[2]}
                        </>
                      ) : (
                        service.name
                      )}
                    </h3>
                  </Row>
                  <Row>
                    <Col sm={12} md={10} lg={12}>
                      <p className="w-90 mb-5">{service.description}</p>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </div>
          <Link to="/services" className="btn btn-primary mb-3 outline-primary">
            <span className="mb-0">See our services</span>
            <Arrow className="btn-arrow" />
          </Link>
        </div>
      </div>
      <div className="padding-large overflow-hidden">
        <div className="mw-xl mb-3">
          <Partners
            logos={LogosSortedByOrder}
            text="We love clients who are brave enough to want to shake things up."
          />
        </div>
      </div>
      <Hero
        heroClass={"hero-mid"}
        headingClass={"quoteHeading"}
        offsetMax={1}
        offsetMid={1}
        offsetMin={1}
        quote
        colSizeMax={10}
        colSizeMin={6}
        colSizeMid={7}
        bgImg="quote-hero"
        bg="bg-primary"
        heading="The Phoenix team has been both valuable and a pleasure to partner with. Their research has provided thorough insights into user problems and needs, helping shape our product strategy and prioritization"
        quoteName="Rosie"
        quoteText="PM, Noom, Inc."
      />
      <Hero
        heroClass={"hero-mid"}
        cta
        linkTo="/contact"
        btnBorder={"btnBorder"}
        headingClass={"ctaHeading"}
        colSizeMax={10}
        colSizeMin={6}
        colSizeMid={6}
        offsetMax={3}
        offsetMid={3}
        offsetMin={2}
        bgImg="cta-hero"
        bg="bg-success"
        heading={`Have a challenge?
We love a good one.`}
      />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Phoenix Home</title>;
