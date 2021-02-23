import React from "react"
import Image from "gatsby-image"
//import Image from "../image"
import { FaRegClock } from "react-icons/fa"
import { Link } from "gatsby"
import styled from "styled-components"

const Post = ({ frontmatter }) => {
  const { title, image, slug, date, category, excerpt } = frontmatter
  return (
    <Wrapper>
      <Image fluid={image.childImageSharp.fluid} className="img" />
      <div className="info">
        <span className="category">{category}</span>
        <Link to={`/${slug}`}>
          <h3>{title}</h3>
        </Link>
        <span className="date">
          <FaRegClock className="icon"></FaRegClock>
          {date}
        </span>
        {/** <div className="underline"></div>*/}
        <p>
          {excerpt}
          <Link to={`/${slug}`}> ...more</Link>
        </p>
        <footer></footer>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin-bottom: 2rem;
  .info {
    text-align: left;
  }
  .info h3 {
    display: inline-block;
    padding-left: 0.5em;
    vertical-align: middle;
    font-size: 1.5rem;
    font-weight: 700;
    color: #454;
  }
  .img {
    margin-bottom: 1rem;
    border-radius: var(--radius);
    height: 17rem;
  }
  .category {
    display: inline-block;
    margin-bottom: 0.5rem;
    background: var(--clr-grey-10);
    padding: 0.1rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
  }
  h3 {
    font-weight: 400;
    margin-bottom: 0.5rem;
    text-transform: initial;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    color: var(--clr-grey-5);
    line-height: 1.6;
  }
  .link {
    text-transform: uppercase;
    font-weight: 700;
    color: var(--clr-primary-5);
    padding-bottom: 0.1rem;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .link:hover {
    border-color: var(--clr-primary-8);
    color: var(--clr-primary-8);
  }
  footer {
    border-top: 1px solid var(--clr-grey-9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-grey-5);
    background-color: transparent;
  }
  .date {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;
    & .icon {
      color: var(--clr-primary-5);
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 30rem 1fr;
      column-gap: 1.5rem;
      .info {
        text-align: left;
      }
      .img {
        height: 100%;
        max-height: 20rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`

export default Post
