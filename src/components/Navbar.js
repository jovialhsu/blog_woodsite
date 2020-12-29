import React from "react"
import { Link } from "gatsby"
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/tags">
            標籤
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
