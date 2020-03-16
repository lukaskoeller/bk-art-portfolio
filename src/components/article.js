import React from 'react'
import PropTypes from 'prop-types'

// Styles
import './article.scss'

const Article = ({ children }) => {
  return (
    <article className="article">
      {children}
    </article>
  )
}

Article.propTypes = {
  children: PropTypes.node.isRequired
}

export default Article
