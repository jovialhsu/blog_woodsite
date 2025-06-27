import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      © {new Date().getFullYear()}, Built with
      <span role="img" aria-label="lucky">
        🍀
      </span>
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}
export default Footer
