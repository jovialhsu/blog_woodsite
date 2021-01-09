import React from "react"
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"
import styles from "../components/Navbar.module.css"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://twitter.com">
          <FaFacebookSquare
            className={`${styles.socialIcon} ${styles.facebookIcon}`}
          ></FaFacebookSquare>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaGithubSquare
            className={`${styles.socialIcon} ${styles.githubIcon}`}
          ></FaGithubSquare>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaTwitterSquare
            className={`${styles.socialIcon} ${styles.twitterIcon}`}
          ></FaTwitterSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
