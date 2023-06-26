import * as React from "react";
import Layout from "../components/Layout";
import HeroCover from "../components/Polygon";
import Hero from "../components/Hero";
import CoverImage from "../images/research.jpg";

const ResearchPage = () => {
  return (
    <Layout background="success">
      <HeroCover
        heroClass="hero-top"
        backgroundPositionCoverImage={"-10% top"}
        adjustPolyWidth={"adjustPolyWidthResearch"}
        chevron={"chevronPrimary"}
        textColor={"text-dark"}
        lgTxtColSpan={7}
        lgTxtOffset={0}
        lgPolColSpan={4}
        lgPolOffset={0}
        rowTextOffset={1}
        rowTextSpan={11}
        bgImageUrl={CoverImage}
        rowTextClassName={"rowTextLeft"}
        bgColor="bg-success"
        polygonClass="polygonLeftS"
        heading="Thoughts, opinions and experiments around the world"
        text="Our teams expertiese is rooted in a desire to continue learning, thinking, and growing. Below are some of our recent studies and thoughts."
      />
      <div className="padding-large ">
        <p>hello</p>
      </div>

      <Hero
        cta
        linkTo="contact"
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
