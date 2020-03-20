// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from 'react'
import PropTypes from 'prop-types'

// Styles
import './container.scss'

const Container = ({ children, styleModifier, id }) => {
  function addModifier (styleModifier) {
    let styleModifierClasses = ''
    styleModifier.forEach((modifierName) => {
      styleModifierClasses += `container--${modifierName}`
    })
    return styleModifierClasses
  };

  return (
    <section id={id} className="section">
      <div className={`container ${addModifier(styleModifier)}`}>
        {children}
      </div>
    </section>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  styleModifier: PropTypes.array,
  id: PropTypes.string
}

Container.defaultProps = {
  styleModifier: []
}

export default Container
