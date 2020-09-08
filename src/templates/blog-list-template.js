import React from "react"
import { graphql,Link } from "gatsby"
import Layout from "../components/layout"

export default class BlogList extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges
        return (
            <Layout>
            <h2>文章列表</h2>
                {posts.map(({ node }) => {
                    //console.log(node)
                    const title = node.frontmatter.title || node.fields.slug
                    return <Link to={'/' + node.frontmatter.slug}>
                    <div key={node.fields.slug}>{title}</div></Link>
                })}
            </Layout>
        )
    }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`