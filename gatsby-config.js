module.exports = {
  plugins: [
    // Plugins
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
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
  ],
};
