import * as React from "react";
import Layout from "../components/Layout";
import HeroCover from "../components/HeroPolgyon";
import Hero from "../components/Hero";

const ResearchPage = () => {
  return (
    <Layout background="success">
      <HeroCover
        svgColor={"Primary"}
        light={"text-dark"}
        polygon="clip-path-polygon"
        bgPolygon="bg-success"
        bg="bg-light"
        heading="Thoughts, opinions and experiments around the world"
        text="Our teams expertiese is rooted in a desire to continue learning, thinking, and growing. Below are some of our recent studies and thoughts."
      />

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
        bgImg="cta-hero"
        bg="bg-success"
        heading="Want to stay up to date on our latest findings? "
      />
    </Layout>
  );
};

export default ResearchPage;

export const Head = () => <title>Phoenix Research</title>;
