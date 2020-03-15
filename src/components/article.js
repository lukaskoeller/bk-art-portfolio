import React from "react"

// Styles
import "./article.scss"

const Article = ({ children }) => {
  return (
    <article className="article">
        {children}
    </article>
  )
}

export default Article
