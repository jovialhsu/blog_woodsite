import React from "react"
import Post from "./Post"
// import Banner from '../Banner'
const Posts = ({ posts, title }) => {
  console.log(posts, title)
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        <article>
          {posts.map(post => {
            console.log(post.node)
            return <Post key={post.id} {...post} />
          })}
        </article>
      </div>
    </section>
  )
}

export default Posts
