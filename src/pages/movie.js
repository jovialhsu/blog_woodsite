import React from "react"
import { Link, graphql } from "gatsby"
// Utilities
import kebabCase from "lodash/kebabCase"
import PropTypes from "prop-types"
// Components
import Layout from "../components/layout"
const moviePage = ({ 
    data: {
        allMovieNode: { group },
    }
}) => {
  return (
    <Layout>
    <section class="movie-page">
      <div>
        <h1>展覽電影縣市一覽</h1>
        <ul className="tags">
          {group.map(tag => (
            isNaN(tag.fieldValue) ?
            <li key={tag.fieldValue}>
              <Link
                className="tag"
                to={`/movie/${kebabCase(tag.fieldValue)}/`}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li> : ''
          ))}
        </ul>
        <span><a className="link" href="https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=8">資料來源:文化部openData</a></span>
      </div>
    </section>
  </Layout>
  )
}
moviePage.propTypes = {
    data: PropTypes.shape({
      allMovieNode: PropTypes.shape({
        group: PropTypes.arrayOf(
          PropTypes.shape({
            fieldValue: PropTypes.string.isRequired,
            totalCount: PropTypes.number.isRequired,
          }).isRequired
        ),
      }),
    }),
  }

export default moviePage


export const pageQuery = graphql`
  query {
    allMovieNode {
      group(field: tag) {
        fieldValue
        totalCount
      }
    }
  }
`
