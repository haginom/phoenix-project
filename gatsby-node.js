const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const WorkDetail = path.resolve(`src/templates/WorkDetail.js`);

  const result = await graphql(`
    query {
      allSanityFeaturedWork {
        edges {
          node {
            id
            title
            description
            previewPoster {
              asset {
                _id
                url
                altText
              }
            }
          }
        }
      }
    }
  `);

  result.data.allSanityFeaturedWork.edges.forEach((edge) => {
    const id = edge.node.id;
    createPage({
      path: `work/${id}`,
      component: WorkDetail,
      context: {
        id,
      },
    });
  });
};
