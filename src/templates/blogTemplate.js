import React from "react"
import { graphql,Link } from "gatsby"
import Layout from "../components/layout"
import SEO from '../components/seo'
import "gitalk/dist/gitalk.css";
import GitalkComponent from "gitalk/dist/gitalk-component";


export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <SEO
                title={frontmatter.title}
                description={frontmatter.description} />
            <div className="blog-post-container">
                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                   
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
          <Link to="/">Go back to the homepage</Link>
          
            </div>
            <GitalkComponent options={{
            clientID: "0c28bd9cbdc37c78447a",
            clientSecret: "4578277a67f11d095507b93cc44e07c92bdf65d6",
            repo: "blog_woodsite",
            owner: "jovialhsu",
            admin: ["jovialhsu"],
            createIssueManually:true,
            id:,
            title:,
            // ...
            // options below
          }} />
        </Layout>

    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        tags
      }
    }
  }
`