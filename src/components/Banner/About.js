import React from "react"
import SocialLinks from "../../constants/socialLinks"
import { StaticImage } from "gatsby-plugin-image"
import Title from "./Title"
import styled from "styled-components"
const About = () => {
  return (
    <Wrapper>
      <Title title="about" />
      <StaticImage
        className="img"
        layout="fixed"
        alt="author"
        width={100}
        height={100}
        src="../../images/milkyWay.jpg"
      />
      <p>
        An experimental base for a noooob engineer to record living dairy and
        related notes
      </p>
      <SocialLinks styleClass="banner-icons" />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-4);
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
    justify-content: space-around;
  }
`
export default About
