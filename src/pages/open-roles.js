import * as React from "react";
import { graphql } from "gatsby";
import Contact from "../svgs/Contact.svg";
import Layout from "../components/Layout";
import { mapEdgesToNodes } from "../library/helpers";
import { Link } from "gatsby";
import Arrow from "../svgs/arrowRight.svg";
import Hero from "../components/Hero";
import X from "../images/phoeni-X.png";

export const query = graphql`
  query OpenRolesQuery {
    openRoles: allSanityOpenRoles {
      edges {
        node {
          id
          roleTitle
          roleDescription
        }
      }
    }
  }
`;

const OpenRolesPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return <p>{errors} an error occured </p>;
  }
  const openRolesNodes = (data || {}).openRoles
    ? mapEdgesToNodes(data.openRoles)
    : [];

  return (
    <Layout>
      <Hero
        offsetMax={1}
        offsetMid={1}
        offsetMin={1}
        colSizeMax={10}
        colSizeMin={6}
        colSizeMid={5}
        svgImage={<Contact className="contact-hero" />}
        bg="bg-primary"
        heading="Open roles"
        coverImage={X}
        coverImageClassName="x-Mobile"
      />
      <div className="padding-large">
        {openRolesNodes.length === 0 && (
          <div>
            <h1>There are no open roles at the moment</h1>
          </div>
        )}
        {openRolesNodes.map((openRoles, index) => (
          <div key={index}>
            <h2 className="mb-5">{openRoles.roleTitle}</h2>
            <p className="mb-5">{openRoles.roleDescription}</p>
            <Link to="/contact" className="btn btn-primary mb-5">
              Apply now
              <Arrow />
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default OpenRolesPage;

export const Head = () => <title>Open Roles</title>;
