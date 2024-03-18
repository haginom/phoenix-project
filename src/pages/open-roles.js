import * as React from "react";
import { graphql } from "gatsby";
import Contact from "../svgs/Contact.svg";
import Layout from "../components/Layout";
import { mapEdgesToNodes } from "../library/helpers";
import { Link } from "gatsby";
import Arrow from "../svgs/arrowRight.svg";
import Hero from "../components/Hero";
import X from "../images/phoeni-X.png";
import { PortableText } from "@portabletext/react";

export const query = graphql`
  query OpenRolesQuery {
    openRoles: allSanityOpenRoles {
      edges {
        node {
          id
          roleTitle
          roleDescription {
            _key
            _type
            _rawContent
          }
        }
      }
    }
  }
`;

const myPortableTextComponents = {
  types: {
    h1: ({ children }) => <h1 className="display-1">{children}</h1>,
    p: ({ children }) => <p className="display-1">{children}</p>,
    normal: ({ children }) => <p className="display-1">{children}</p>,
    paragraph: ({ children }) => <p className="display-1">{children}</p>,
    span: ({ children }) => <p className="display-1">{children}</p>,
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    strong: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    underline: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

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
        heroClass="hero-top"
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
            <div className="mb-5">
              {openRoles.roleDescription._rawContent.map((content, index) => (
                <PortableText
                  key={index}
                  value={[content]}
                  components={myPortableTextComponents}
                />
              ))}
            </div>
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
