module.exports = {
  siteMetadata: {
    title: `SRIC Master Website`
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-typescript",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ""
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 0,
        sv: 0
      }
    }
  ]
};
