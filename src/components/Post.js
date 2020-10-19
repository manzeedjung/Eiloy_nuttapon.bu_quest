import React from 'react'


export const Post = ({ post, excerpt }) => (
  <article className={excerpt ? 'post-excerpt' : 'post'}>
    <h2>{post.id}</h2>
    <p>{excerpt ? post.joke.substring(0, 100) : post.joke}</p>


  </article>
)
