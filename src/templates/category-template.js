import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Posts from '../components/Posts'
export default function CategoryTemplate(props) {
    const { data:{allMarkdownRemark:{nodes:posts}}} = props;
    const {
        pageContext:{category}
    } = props
    return (
        <Layout>
           <Posts posts={posts} title={`category/${category}`}/>
        </Layout>
    )
}
export const query = graphql`
 query MyQuery($category: String) {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: $category}}}) {
    nodes {
      id
      frontmatter {
        title
        category
        date(formatString: "MMMM,Do YYYY")
        slug
        image {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
              }
          }
        }
        excerpt
        tags
      }
    }
  }
}
`