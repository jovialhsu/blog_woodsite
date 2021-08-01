import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
const Comments = React.lazy(() => import("../components/Comments"))

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const isSSR = typeof window === "undefined"
  return (
    <Layout>
      <SEO
        lang="zh-Hant-TW"
        title={frontmatter.title}
        description={frontmatter.description}
      />
      <Wrapper>
        <div className="post-info">
          <div className="blog-post">
            <h2>{frontmatter.title}</h2>
            <p>{frontmatter.date}</p>

            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          {!isSSR && (
            <React.Suspense fallback={<div />}>
              <Comments />
            </React.Suspense>
          )}
          <Link to="/" className="btn" title="back home">
            回到首頁
          </Link>
        </div>
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        slug
        title
        description
        tags
      }
    }
  }
`
const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: left;
    max-width: 1100px;
    span {
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 700;
    }
    p {
      color: var(--clr-grey-4);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
    img {
      max-width: 500px;
      border-radius: 5px;
    }
    blockquote {
      background: var(--clr-grey-9);
      padding: 1rem;
      margin-right: 0;
      border-left: 2px var(--clr-primary-5) solid;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
  }
`
