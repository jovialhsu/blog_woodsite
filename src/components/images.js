import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Images = () => {
  const data = useStaticQuery(graphql`
    {
      fixed: file(relativePath: { eq: "milkyWay.jpg" }) {
        childImageSharp {
          fixed(width: 200, grayscale: true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fluid: file(relativePath: { eq: "ocean.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <section className="images">
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
