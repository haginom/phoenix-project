import * as React from "react";
import { graphql } from "gatsby";
import HeroCover from "../components/Hero-Contact";
import Contact from "../svgs/Contact.svg";
import Layout from "../components/Layout";
import { mapEdgesToNodes } from "../library/helpers";
import { Link } from "gatsby";
import Arrow from "../svgs/arrowRight.svg";

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
      <HeroCover
        offset={2}
        size={4}
        contactCoverImage={<Contact className="contact-hero" />}
        bg="bg-primary"
        heading="Open roles"
      />
      <div className="padding-large">
        {openRolesNodes.map((openRoles, index) => (
          <div key={index}>
            <h2>{openRoles.roleTitle}</h2>
            <p>{openRoles.roleDescription}</p>
            <Link to="/contact" className="btn btn-primary">
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
