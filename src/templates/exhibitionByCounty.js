import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function expoCountyTagPage({ pageContext, data }) {
  console.log(data)
  const { edges } = data.allExpoNode
  const { tag } = pageContext
  const header = `${tag}展覽一覽`
  return (
    <Layout>
      <SEO title={header} />
      <section className="expo-page">
        <h1>
          <span role="img" aria-label="sparkle">
            ✨
          </span>
          {tag}展覽一覽
        </h1>
        <ul>
          {edges.map(({ node }) => {
            return (
              <li key={node.id} title={node.description}>
                <div>{node.showInfo[0].time}</div>
                {node.showInfo[0].onSales === "Y" ? (
                  node.webSales !== "" ? (
                    <a href={node.webSales} target="_blank" rel="noreferrer">
                      <span
                        role="img"
                        aria-label="sale"
                        title={node.showInfo[0].price}
                      >
                        {" "}
                      </span>
                    </a>
                  ) : (
                    <span
                      role="img"
                      aria-label="sale"
                      title={node.showInfo[0].price}
                    >
                      {" "}
                      💲
                    </span>
                  )
                ) : (
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
        <Link to="/exhibition">
          <span role="img" aria-label="expo">
            🪐
          </span>
          看全部縣市
        </Link>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allExpoNode(sort: { fields: start, order: ASC }) {
      edges {
        node {
          address
          description
          image
          end
          start
          tag
          title
          yearly
          sourceWeb
          masterUnit
        }
      }
    }
  }
`
