module.exports = {
  siteMetadata: {
    title: `Daniel Noyola`,
    description: `Daniel Noyola's blog.`,
    siteUrl: `https://daniel.noyola.dev`,
  },
  plugins: [
    // Plugins
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "eqx3oc80",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    //`gatsby-plugin-offline`,
  ],
};
