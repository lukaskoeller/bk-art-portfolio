import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// Styles
import "./header.scss"
import Logo from "../images/barbara-koeller-logo.inline.svg"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <nav className="nav">
      <Link className="nav__item" to="/about">Künstler</Link>
      <Link className="nav__item" to="/gallery/">Gallerie</Link>
      <Link className="nav__item" to="/exhibitions/">Ausstellungen</Link>
      <Link className="nav__item" to="/contact/">Kontakt</Link>
    </nav>
  </header>
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
