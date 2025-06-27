import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
export default function movieCountyTagPage({ pageContext, data }) {
  const { edges } = data.allMovieNode
  const { tag } = pageContext
  const header = `${tag}展覽電影一覽`
  return (
    <Layout>
      <Seo title={header} />
      <Wrapper>
        <section className="movie-page">
          <h1>
            <span role="img" aria-label="sparkle">
              ✨
            </span>
            {tag}展覽電影一覽
          </h1>
          <ul>
            {edges.map(({ node }) => {
              return (
                <li key={node.id}>
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
                          💲
                        </span>
                      </a>
                    ) : (
                      <span
                        role="img"
                        aria-label="sale"
                        title={node.showInfo[0].price}
                      >
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
                  {node.showInfo[0].location !== "" ? (
                    <div className="desc">
                      <span role="img" aria-label="location">
                        📍
                      </span>{" "}
                      地址: {node.showInfo[0].location}
                    </div>
                  ) : null}
                  {node.description !== "" ? (
                    <div className="desc">
                      <span role="img" aria-label="moive description">
                        🎬
                      </span>
                      詳情:
                      <ul>
                        {node.description.split("。").map((item, i) => {
                          return (
                            <li>
                              {item}
                              {i !== node.description.split("。").length - 1
                                ? "。"
                                : null}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ul>

          {/*
            This links to a page that does not yet exist.
            You'll come back to it!
          */}
          <Link to="/movie">
            <span role="img" aria-label="movie">
              🎬
            </span>
            看全部縣市
          </Link>
        </section>
      </Wrapper>
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
const Wrapper = styled.section`
  .desc {
    font-size: 13px;
    ul {
      li {
        margin-bottom: calc(1.45rem / 3);
      }
    }
  }
`
