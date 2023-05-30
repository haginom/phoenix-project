import * as React from "react";
import Layout from "../components/Layout";
import HeroCover from "../components/Polygon";
import Hero from "../components/Hero";
import CoverImage from "../images/about-3.jpg";

const ResearchPage = () => {
  return (
    <Layout background="success">
      <HeroCover
        chevron={"chevronPrimary"}
        textColor={"text-dark"}
        lgTxtColSpan={6}
        lgTxtOffset={0}
        lgPolColSpan={6}
        lgPolOffset={0}
        rowTextOffset={0}
        rowTextSpan={10}
        bgImageUrl={CoverImage}
        rowTextClassName={"rowTextLeft"}
        bgColor="bg-success"
        polygonClass="polygonLeftS"
        heading="Thoughts, opinions and experiments around the world"
        text="Our teams expertiese is rooted in a desire to continue learning, thinking, and growing. Below are some of our recent studies and thoughts."
      />

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
