/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    
    const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
    const tagTemplate = require.resolve("./src/templates/tags.js")


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
// Extract tag data from query
      const tags = result.data.tagsGroup.group

      //console.log(tags)
      tags.forEach(tag => {
        createPage({
          path: `tags/${tag.fieldValue}`,
          component: tagTemplate,
          context: {
            tag: tag.fieldValue,
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