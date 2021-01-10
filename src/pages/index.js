import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

import SEO from "../components/seo"
import PostLink from "../components/postLink"
import Posts from "../components/Posts"
import { graphql } from "gatsby"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>文章一覽</h1>
    {/* {edges.map(edge => (
      <PostLink key={edge.node.id} post={edge.node} />
    ))} */}
    <Posts posts={posts} title="文章一覽" />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
