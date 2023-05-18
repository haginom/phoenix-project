import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroCover from "../components/Hero-Services";
import Service from "../components/Service";
import { Container } from "react-bootstrap";
import InfoBox from "../components/InfoBox";
import ServicesGraphic from "../svgs/Services-Graphic.svg";
import Hero from "../components/Hero";
import { mapEdgesToNodes } from "../library/helpers";

export const Query = graphql`
  query ServicePageQuery {
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
          subService {
            description
            title
          }
          miniIcon {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

const ServicePage = ({ data }) => {
  const serviceNodes = (data || {}).services
    ? mapEdgesToNodes(data.services)
    : [];
  const ServicesSortedByOrder = serviceNodes.sort((a, b) => a.order - b.order);

  return (
    <Layout>
      <HeroCover
        bg="bg-light"
        heading="We have the tools to help build your brand"
        text="We don’t like to be boxed into disciplines, but mix all the tools to come up with the ideal approach, bringing a blend of brand fundamentals, strategic design, deep user research and digital craft to each project. "
      />
      {ServicesSortedByOrder.map((service, index) => (
        <Service
          key={index}
          serviceImage={
            <img
              src={service.icon.asset.url}
              alt="icon for service"
              className="serviceIcon"
            />
          }
          title={service.name}
          titleDescription={service.description}
          service="brandBuilding"
          subServices={service.subService}
          miniIcon={service.miniIcon}
        />
      ))}

      <Container className="padding-large bg-primary" fluid>
        <InfoBox
          className="text-light"
          heading="strategists love shapes"
          text="And we arrive at ideas with a divergent, convergent conceptual framework"
        />
        <div>
          <p className="infoBoxWrapper text-light">
            We use a loosely adapted double-diamond approach. Going wide on
            meaning, beliefs, context, cultural grammar, synthesizing insights
            to define a plan/ positioning, developing and delivering the brand
            experience, and iterating to bring everyone on board.
          </p>
        </div>
      </Container>
      <Container fluid className="bg-primary padding-md">
        <ServicesGraphic className="" />
      </Container>
      <Hero
        size={6}
        offset={2}
        cta
        bgImg="cta-hero"
        bg="bg-success"
        heading="Have a challenge? We love a good one."
      />
    </Layout>
  );
};

export default ServicePage;

export const Head = () => <title>Phoenix Services</title>;
