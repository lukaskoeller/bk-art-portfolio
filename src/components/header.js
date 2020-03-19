import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

// Components
import Logo from '../images/barbara-koeller-logo.inline.svg'

// Styles
import './header.scss'

const Header = ({ title, theme }) => {
  return (
    <header className={`header header--${theme}`}>
      <div className="header__home">
        <Link to="/">
          <Logo />
        </Link>
        <h3 className="header__title">{title}</h3>
      </div>
      <nav className="nav">
        <Link className="nav__item" to="/about">Künstler</Link>
        <Link className="nav__item" to="/gallery/">Gallerie</Link>
        <Link className="nav__item" to="/exhibitions/">Ausstellungen</Link>
        <Link className="nav__item" to="/contact/">Kontakt</Link>
      </nav>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string
}

Header.defaultProps = {
  theme: 'light'
}

export default Header
