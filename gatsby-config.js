module.exports = {
  siteMetadata: {
    title: `SRIC Master Website`
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-typescript",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`
      }
    },
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
