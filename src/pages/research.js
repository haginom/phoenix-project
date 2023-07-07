import * as React from "react";
import Layout from "../components/Layout";
import HeroCover from "../components/Polygon";
import Hero from "../components/Hero";
import CoverImage from "../images/research.jpg";

const ResearchPage = () => {
  return (
    <Layout background="success">
      <HeroCover
        rectangle={"rectangleSuccess"}
        heroClass={"hero-top"}
        backgroundPositionCoverImage="backgroundImageResearch"
        chevron={"chevronPrimary"}
        key={0}
        textColor={"text-dark"}
        lgTxtColSpan={7}
        xlTxtColSpan={8}
        lgTxtOffset={0}
        lgPolColSpan={5}
        lgPolOffset={0}
        xlPolColSpan={4}
        rowTextOffset={1}
        rowTextSpan={10}
        rowTextClassName={"rowTextLeftResearch"}
        bgColor="bg-success"
        bgImageUrl={CoverImage}
        polygonClass="polygonLeftS"
        adjustPolyWidth="adjustPolyWidthAbout"
        heading="Thoughts, opinions and experiments around the world"
        text="Our teams expertiese is rooted in a desire to continue learning, thinking, and growing. Below are some of our recent studies and thoughts."
      />
      <div className="padding-large ">
        <p>hello</p>
      </div>

      <Hero
        cta
        heroClass={"hero-mid"}
        linkTo="/contact"
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
