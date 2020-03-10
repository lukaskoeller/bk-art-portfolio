// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// Components
import Container from "../components/container"

const Footer = ({ siteTitle }) => (
  <Container>
    <footer>
      {siteTitle} - Year {new Date().getFullYear()}
    </footer>
  </Container>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
