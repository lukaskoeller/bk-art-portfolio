import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

// Components
import Container from '../components/container'
import Logo from '../images/barbara-koeller-logo.inline.svg'

// Styles
import './footer.scss'

const Footer = ({ siteTitle }) => (
  <Container id="footer">
    <footer className="footer">
      <Link to="/">
        <Logo />
      </Link>
      <div className="footer__notes">
        <span className="footer__item">Liebe Grüße aus Hamburg. {siteTitle}</span>
        <Link to="/imprints" className="footer__item">Impressum</Link>
        <Link to="/privacy" className="footer__item">Datenschutzerklärung</Link>
      </div>
    </footer>
  </Container>
)

Footer.propTypes = {
  siteTitle: PropTypes.string
}

Footer.defaultProps = {
  siteTitle: ''
}

export default Footer
