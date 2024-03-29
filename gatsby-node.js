/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const fetch = require("node-fetch")
const { createFilePath } = require("gatsby-source-filesystem")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const tagTemplate = require.resolve("./src/templates/tags.js")
  const movieTagTemplate = require.resolve("./src/templates/movieCountyTag.js")
  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      categories: allMarkdownRemark {
        distinct(field: frontmatter___category)
      }
      countyGroup: allMovieNode(limit: 2000) {
        group(field: tag) {
          fieldValue
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.postsRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
  result.data.categories.distinct.forEach(category => {
    createPage({
      path: `/${category}`,
      component: require.resolve(`./src/templates/category-template.js`),
      context: {
        category,
      },
    })
  })
  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `tags/${tag.fieldValue}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
  const countyTags = result.data.countyGroup.group
  countyTags.forEach(county => {
    createPage({
      path: `movie/${county.fieldValue}`,
      component: movieTagTemplate,
      context: {
        tag: county.fieldValue,
      },
    })
  })

  // Create blog-list pages
  const posts = result.data.postsRemark.edges
  const postsPerPage = 8
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  const res = await fetch(
    `https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=8`
  )
  const data = await res.json()
  // console.log(data)
  data.map((movie, i) => {
    const movieNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `movieNode`,
        // name of the graphQL query --> allMovieNode {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],
      uid: movie.UID,
      masterUnit: movie.masterUnit,
      showInfo: movie.showInfo,
      tag: movie.showInfo[0].location.trim().slice(0, 3),
      title: movie.title,
      description: movie.descriptionFilterHtml,
      sourceWeb: movie.sourceWebPromote,
      webSales: movie.webSales,
    }
    const contentDigest = JSON.stringify(movieNode)
    movieNode.internal.contentDigest = contentDigest
    createNode(movieNode)
  })
  return
}
exports.onCreateWebpackConfig = ({ stage, rules, plugins, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  })
}
