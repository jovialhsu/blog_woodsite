import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Images = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "milkyWay.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED, layout: FIXED)
        }
      }
    }
  `)
  return (
    <section className="images">
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <GatsbyImage alt="" image={data.file.childImageSharp.gatsbyImageData} />
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <GatsbyImage alt="" image={data.file.childImageSharp.gatsbyImageData} />
      </article>
    </section>
  )
}

export default Images
