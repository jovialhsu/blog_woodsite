/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [open, setOpen] = React.useState(false)
  const toggleSidebar = () => {
    setOpen(!open)
  }
  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Navbar
          siteTitle={data.site.siteMetadata.title}
          toggle={toggleSidebar}
        />
        <Sidebar open={open} toggle={toggleSidebar} />
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        <span role="img" aria-label="lucky">
          🍀
        </span>
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
