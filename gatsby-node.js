const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('src/templates/projects.js');
    resolve(
      graphql(`
        {
          allContentfulProject (limit:100) {
            edges {
              node {
                id
                title
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulProject.edges.forEach((edge) => {
          createPage({
            path: "projects/" + edge.node.slug,
            component: projectTemplate,
            context: {
              slug: edge.node.slug
            }
          });
        });
        return;
      })
    )
  })
}