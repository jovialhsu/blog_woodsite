import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import styled from 'styled-components'
const Navbar = ({ siteTitle, toggle }) => {
  return (
    <Wrapper>
      <nav className="nav">
        <div className="navCenter">
          <div className="navHeader">
            <Link to="/" className="navLogo">
              <span role="img" aria-label="logo-wood">
                {siteTitle}🌳
              </span>
            </Link>
            <button
              className="toggleBtn"
              aria-label="menu-button"
              onClick={toggle}
            >
              <FaBars />
            </button>
          </div>
          <Links styleClass="navLinks"/>
          <SocialLinks styleClass="navIcons" />
        </div>
      </nav>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.link {
  border-bottom: 1px solid darkslategrey;
  transition: all 0.3s;
  padding: 0.25em 1em;
}
.link:hover {
  text-decoration: none;
  background-color: dimgray;
  color: #fff;
}
.nav {
  display: flex;
  height: 5rem;
  align-items: center;
  background: #aabbcc50;
}
.nav li {
  margin: 0.5em;
}
.navCenter {
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
}
.navHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navLogo {
  display: block;
  font-size: 2rem;
  color: rgb(58, 124, 189);
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  white-space: nowrap;
}
.navLogo:hover{
  text-decoration: none;
}
.navLogo img {
  height: 100%;
}
.navLogo:hover span{
      filter: drop-shadow(2px 1px 1px grey) brightness(120%);
}
.toggleBtn {
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: rgb(58, 124, 189);
  cursor: pointer;
  transition: all 0.3s linear;
}
.toggleBtn:hover {
  color: #abc;
}
.navLinks {
  display: none;
}
.navIcons {
  display: none;
}

.facebookIcon {
  color: #3b5998;
}
.twitterIcon {
  color: #00acee;
}
.githubIcon {
  color: #222222;
}
.sidebarLinks li {
  margin-bottom: 1.5rem;
}
.sidebarLinks .pageLink {
  font-size: 2rem;
  display: block;
  color: rgb(6, 82, 6);
  font-weight: 700;
}
@media screen and (min-width: 800px) {
  .toggleBtn {
    display: none;
  }
  .navCenter {
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 2rem;
    align-items: center;
  }
  .navLinks {
    display: flex;
    align-items: center;
    margin: 0;
  }
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
  .navIcons {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
  .navIcons .socialIcon {
    font-size: 1.5rem;
    transition: all 0.2s ease;
    margin-left: 0.5rem;
  }
  .navIcons .socialIcon:hover {
    color: hsl(217, 37%, 57%);
    transform: translateY(-5px);
  }
}
`;
export default Navbar
