/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;

    const path = `/blog/${slug.current}/`;

    reporter.info(`Creating blog post page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/post.tsx"),
      context: { id },
    });
  });
}

async function createCategoryPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityCategory(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const categoryEdges = (result.data.allSanityCategory || {}).edges || [];

  categoryEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;

    const path = `/category/${slug.current}/`;

    reporter.info(`Creating category page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/category.tsx"),
      context: { id },
    });
  });
}

async function createAuthorPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityAuthor(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const authorEdges = (result.data.allSanityAuthor || {}).edges || [];

  authorEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;

    const path = `/author/${slug.current}/`;

    reporter.info(`Creating author page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/author.tsx"),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter);
  await createCategoryPages(graphql, actions, reporter);
  await createAuthorPages(graphql, actions, reporter);
};
