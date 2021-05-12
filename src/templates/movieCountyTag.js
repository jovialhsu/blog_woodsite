import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function movieCountyTagPage({ pageContext, data }) {
  const { edges } = data.allMovieNode
  const { tag } = pageContext
  const header = `${tag}展覽電影一覽`
  return (
    <Layout>
       <SEO title={header}/>
      <div>
        <h1>{tag}展覽電影一覽</h1>
        <ul>
          {edges.map(({ node }) => {
            return (
              <li key={node.id} title={node.description}>
                <div>{node.showInfo[0].time}</div>
                {node.showInfo[0].onSales === "Y" ? node.webSales !== "" ? (
                  <a href={node.webSales} target="_blank" rel="noreferrer">
                    <span
                      role="img"
                      aria-labelledby="sale"
                      title={node.showInfo[0].price}
                    >
                      {" "}
                      💲
                    </span>
                  </a>
                ) :(<span
                role="img"
                aria-labelledby="sale"
                title={node.showInfo[0].price}
              >
                {" "}
                💲
              </span>) 
              :(
                  ""
                )}
                <span title={node.showInfo[0].location}>
                  【{node.showInfo[0].locationName}】
                </span>
                {node.title}
              </li>
            )
          })}
        </ul>

        {/*
            This links to a page that does not yet exist.
            You'll come back to it!
          */}
        <Link to="/movie">看全部縣市</Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: [String]) {
    allMovieNode(
      sort: { order: ASC, fields: showInfo___time }
      filter: { tag: { in: $tag } }
    ) {
      edges {
        node {
          id
          masterUnit
          tag
          showInfo {
            time
            onSales
            price
            location
            locationName
          }
          description
          sourceWeb
          title
          webSales
        }
      }
    }
  }
`
