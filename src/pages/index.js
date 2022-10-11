import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
//import PostLink from "../components/postLink"
import Posts from "../components/Posts"

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { nodes: posts },
  } = data
  return (
    <Layout>
      <Seo title="Home" />
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image src="gatsby-astronaut.png" />
      </div>*/}

      {/* {edges.map(edge => (
      <PostLink key={edge.node.id} post={edge.node} />
    ))} */}

      <Posts posts={posts} title="" />
    </Layout>
  )
}

export default IndexPage

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             slug
//             title
//           }
//         }
//       }
//     }
//   }
// `
export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        frontmatter {
          date(formatString: "MMM Do,YYYY")
          description
          slug
          tags
          title
          excerpt
          category
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  }
`
