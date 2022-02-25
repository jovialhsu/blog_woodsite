import React from "react"
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"

import styled from "styled-components"
const SocialLinks = ({ styleClass }) => {
  return (
    <Wrapper>
    <ul className={styleClass}>
      <li>
        <a aria-label="facebook" href="https://www.facebook.com/sinling.hsu/">
          <FaFacebookSquare
            className={`socialIcon facebookIcon`}
          ></FaFacebookSquare>
        </a>
      </li>
      <li>
        <a aria-label="github" href="https://github.com/jovialhsu">
          <FaGithubSquare
            className={`socialIcon githubIcon`}
          ></FaGithubSquare>
        </a>
      </li>
      <li>
        <a aria-label="twitter" href="https://twitter.com/jovial528">
          <FaTwitterSquare
            className={`socialIcon twitterIcon`}
          ></FaTwitterSquare>
        </a>
      </li>
    </ul>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.facebookIcon {
  color: #3b5998;
}
.twitterIcon {
  color: #00acee;
}
.githubIcon {
  color: #222222;
}
`
export default SocialLinks
