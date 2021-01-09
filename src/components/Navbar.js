import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import styles from "./Navbar.module.css"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
const Navbar = ({ siteTitle, toggle }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to="/" className={styles.navLogo}>
            <span role="img" aria-label="logo-wood">
              {siteTitle}🌳
            </span>
          </Link>
          <button className={styles.toggleBtn} onClick={toggle}>
            <FaBars />
          </button>
        </div>
        <Links styleClass={styles.navLinks} />
        <SocialLinks styleClass={styles.navIcons} />
      </div>
    </nav>
  )
}
export default Navbar
