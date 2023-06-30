import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
const Links = ({ styleClass, children }) => {
  return (
    <Wrapper>
      <ul className={styleClass}>
        <li>
          <Link to="/" className="pageLink">
            Home
          </Link>
        </li>
        {/*<li>
        <Link to="/post" className="pageLink">
          文章
        </Link>
        {children}
       </li>*/}
        <li>
          <Link to="/contact" className="pageLink">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/movie" className="pageLink">
            展覽電影一覽
          </Link>
        </li>
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .sidebarLinks .pageLink {
    font-size: 2rem;
    display: block;
    color: #aabbcc;
    font-weight: 700;
    &:hover {
      color: #d3d8de;
    }
  }
  @media screen and (min-width: 800px) {
    .pageLink {
      margin-right: 0.75rem;
    }
    .pageLink {
      color: #0a0c10;
      font-weight: bold;
      letter-spacing: 0.1rem;
      font-size: 1rem;
      transition: all 0.2s linear;
      cursor: pointer;
      white-space: nowrap;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
    }
    .pageLink:hover {
      background: hsl(217, 37%, 57%);
      color: hsl(0, 0%, 99%);
    }
  }
`
export default Links
