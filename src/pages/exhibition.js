import React from "react"
import { Link, graphql } from "gatsby"
// Utilities
import kebabCase from "lodash/kebabCase"
// import PropTypes from "prop-types"
// Components
import Layout from "../components/layout"
const expoPage = ({ data }) => {
  const { edges } = data.allExpoNode
  console.log(edges)
  return (
    <Layout>
      <section className="movie-page">
        <div>
          <h1>展覽一覽</h1>

          {edges.map(expo => (
            <div className="expoCard" key={expo.node.id}>
              <img src={expo.node.image} />
              <h3>{expo.node.title}</h3>
              <span>
                {expo.node.start}~{expo.node.end}
              </span>
              <ul>
                <li>{expo.node.masterUnit}</li>
                <li>{expo.node.description}</li>
                <li>
                  <a>{expo.node.sourceWeb}</a>
                </li>
                <li>{expo.node.yearly}</li>
              </ul>
            </div>
          ))}

          <span>
            <a
              className="link"
              href="https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6"
            >
              資料來源:文化部openData
            </a>
          </span>
        </div>
      </section>
    </Layout>
  )
}
// expoPage.propTypes = {
//   data: PropTypes.shape({
//     allExpoNode: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//   }),
// }

export default expoPage

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
