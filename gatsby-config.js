require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const capitalize = require(`remark-capitalize`)
const emoji = require(`remark-emoji`)
module.exports = {
  siteMetadata: {
    title: `Blog Woodsite`,
    description: `An experimental base for a noooob engineer to record living dairy and related notes`,
    author: `@jovialhsu`,
    siteUrl: `https://hsu-web.com`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [capitalize, emoji],
        // extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/blog/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hsu-web`,
        short_name: `starter-blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: "Books",
            mapping: { photo: `fileNode` },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-169925679-1", // Google Analytics / GA
          // process.env.AW_CONVERSION_ID, // Google Ads / Adwords / AW
          // process.env.DC_FLOODIGHT_ID, // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
