import React from "react"
import { Link } from "gatsby"
import * as styles from "../components/Navbar.module.css"
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className={styles.pageLink}>
          Home
        </Link>
      </li>
      {/*  <li>
        <Link to="/tags" className={styles.pageLink}>
          tags
        </Link>
        {children}
      </li>*/}
      <li>
        <Link to="/contact" className={styles.pageLink}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/movie" className={styles.pageLink}>
          免費電影一覽
        </Link>
      </li>
      <li>
        <Link to="/exhibition" className={styles.pageLink}>
          展覽一覽
        </Link>
      </li>
    </ul>
  )
}

export default Links
