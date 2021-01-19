const _ = require("lodash");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  switch (node.internal.type) {
    case "MarkdownRemark": {
      const { permalink, layout, primaryTag } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        slug = `/${relativePath.replace(".md", "")}/`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: "slug",
        value: slug || "",
      });

      // Used to determine a page layout.
      createNodeField({
        node,
        name: "layout",
        value: layout || "",
      });

      createNodeField({
        node,
        name: "primaryTag",
        value: primaryTag || "",
      });
    }
  }
};

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    query allPostQuery {
      allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: ASC }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            id
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error(result.errors);
  }
  const postEdges = (result.data.allMarkdownRemark || {}).edges || [];

  postEdges.forEach(({ node }, index) => {
    const { id } = node;
    const { slug, layout } = node.fields;

    const path = `/blog/${slug}/`;

    reporter.info(`Creating blog post page: ${path}`);

    createPage({
      path,
      component: require.resolve(`./src/templates/${layout || "post"}.tsx`),
      context: {
        id,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter);
};
