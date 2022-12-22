/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/horus",
  siteMetadata: {
    title: `horus`,
    siteUrl: `https://influential.github.io/horus`
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-image", "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "assets",
      "path": "./src/assets/",
    },
    __key: "assets"
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Barlow\:200`
        ],
        display: 'swap'
      }
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `siteData`,
        path: `${__dirname}/src/helpers/`
      }
    }
]
};