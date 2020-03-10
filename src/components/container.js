// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import PropTypes from 'prop-types';

// Styles
import container from "./container.module.scss"

const Container = (props) => {
  function addModifier(styleModifier) {
    let styleModifierClasses = ``;
    styleModifier.forEach((modifierName) => {
      styleModifierClasses += ` ${container[`container` + modifierName]}`
    })
    return styleModifierClasses;
  };

  return (
    <section className={container.section}>
      <div className={`${container.container} ${addModifier(props.styleModifier)}`}>
          {props.children}
      </div>
  </section>
  )
}

Container.propTypes = {
  styleModifier: PropTypes.array,
};

Container.defaultProps = {
  styleModifier: [],
}

export default Container
