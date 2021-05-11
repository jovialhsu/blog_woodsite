import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const Movie = () => {
  const fetchMovie = async () => {
    try {
      const res = await fetch(
        `https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=8`
      )

      const data = await res.json()
      console.log(data)
      const {
        UID,
        masterUnit,
        title,
        showInfo,
        descriptionFilterHtml,
        sourceWebPromote,
        webSales,
      } = data
      return data
    } catch (error) {
      console.log(error)
    }
  }
  //   const movieData = async ()=>{
  //     const movies = await fetchMovie();
  //     const neighbors = await Promise.all(
  //         movies.map(m=>fetchMovie())
  //     );
  //     //Promise.all可以處理回傳的陣列
  //     console.log(neighbors)
  // }
  fetchMovie()
  console.log(fetchMovie)
  //const {} = fetchMovie
  return (
    <Layout>
      <SEO title="movie info" />
      <h1>Hi from the movie page</h1>
      <p>展覽電影一覽</p>

      <Link to="/">homepage</Link>
    </Layout>
  )
}

export default Movie
