import * as React from "react";
import Layout from "../components/Layout";
import HeroCover from "../components/Hero-Services";
import Service from "../components/Service";
import BrandIcon from "../svgs/Brand-Icon.svg";
import ResearchIcon from "../svgs/Research-Icon.svg";
import ExpansionIcon from "../svgs/Expansion-Icon.svg";
import { Container } from "react-bootstrap";
import InfoBox from "../components/InfoBox";
import ServicesGraphic from "../svgs/Services-Graphic.svg";
import Hero from "../components/Hero";

const ServicePage = () => {
  return (
    <Layout>
      <HeroCover
        bg="bg-light"
        heading="We have the tools to help build your brand"
        text="We don’t like to be boxed into disciplines, but mix all the tools to come up with the ideal approach, bringing a blend of brand fundamentals, strategic design, deep user research and digital craft to each project. "
      />

      <Service
        serviceImage={<BrandIcon className="serviceIcon" />}
        title="Brand Building"
        titleDescription={
          "From brand positioning to brand architecture, we build new brands from scratch and reposition those looking to grow.  We handle key narrative and messaging and often collaborate or cross-over with various creative partners to bring brand strategy to life."
        }
        service="brandBuilding"
      />
      <Service
        serviceImage={<ResearchIcon className="serviceIcon" />}
        title="Research & Design"
        titleDescription={
          "We love to connect the dots between the brand promise and the actual service or product experience, through deep user research and cultural insight work, and early stage concept design & user testing."
        }
        service="researchDesign"
      />
      <Service
        serviceImage={<ExpansionIcon className="serviceIcon" />}
        title="Expansion & Innovation"
        titleDescription={
          "Through cultural understanding and innovation practices we help with expanding into new markets, new verticals, new products, and future-proofing for now and down the road!"
        }
        service="expansionInnovation"
      />
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
