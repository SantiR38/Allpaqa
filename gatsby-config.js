/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Allpaqa`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Real time Spanish - Quechua dictionary and translator.`  // No aparece en la metadata del html
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/alpaca.png',
      },
    }
  ]
};